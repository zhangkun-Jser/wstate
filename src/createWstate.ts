import { isFunction, isThenable, isArray, isObject } from './util'

const XSTATE = Symbol('XSTATE')

export const isWstate = input => !!(input && input[XSTATE])

const getWstateValue = (value, currentProxy, previousProxy) => {
  let status = ''
  /**
   * if previousProxy exists, it is in reusing phase
   * otherwise is in initializing phase
   */
  if (previousProxy) {
    if (isWstate(value)) {
      let parent = value[XSTATE].getParent()

      // reuse wstate
      if (parent === previousProxy) {
        status = 'reuse'
      } else {
        status = 'create'
      }
    } else if (isArray(value) || isObject(value)) {
      status = 'create'
    }
  } else if (isArray(value) || isObject(value)) {
    status = 'create'
  }

  if (status === 'reuse') {
    value = value[XSTATE].compute()
    value[XSTATE].setParent(currentProxy)
  } else if (status === 'create') {
    value = createWstate(value)
    value[XSTATE].setParent(currentProxy)
  }

  return value
}

const fillObjectWstate = (currentProxy, initialObject, target, scapegoat, previousProxy) => {
  for (let key in initialObject) {
    let value = getWstateValue(initialObject[key], currentProxy, previousProxy)
    scapegoat[key] = value
    target[key] = value
  }
}

const fillArrayWstate = (currentProxy, initialArray, target, scapegoat, previousProxy) => {
  for (let i = 0; i < initialArray.length; i++) {
    let item = getWstateValue(initialArray[i], currentProxy, previousProxy)
    scapegoat[i] = item
    target[i] = item
  }
}

export let isMutable = false
let dirtyStateList = []

const commit = () => {
  let list = dirtyStateList

  dirtyStateList = []

  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    item[XSTATE].trigger()
  }
}

export const mutate = <T extends () => any>(f: T): ReturnType<T> => {
  if (!isFunction(f)) {
    throw new Error(`Expected f in mutate(f) is a function, but got ${f} `)
  }

  if (f[Symbol.toStringTag] === 'AsyncFunction') {
    throw new Error(`mutate(f) don't support async function`)
  }

  let previousFlag = isMutable

  isMutable = true

  try {
    let result = f()

    if (isThenable(result)) {
      throw new Error(`mutate(f) don't support async function`)
    }
    return result
  } finally {
    isMutable = previousFlag
    if (!previousFlag) commit()
  }
}

const createWstate = <State extends object = any>(
  initialState: State,
  previousProxy: State | null = null
): State => {
  if (!isArray(initialState) && !isObject(initialState)) {
    throw new Error(`Expected initialState to be array or object, but got ${initialState}`)
  }

  let scapegoat = (isArray(initialState) ? [] : {}) as State
  let target = (isArray(initialState) ? [] : {}) as State

  let consuming = false
  let watcher = null
  let watch = f => {
    if (watcher) throw new Error(`wstate can not be watched twice`)

    if (!scapegoat) throw new Error(`current state is immutable, can not be watched now`)

    if (parent) throw new Error(`Only root node can be watched`)

    watcher = f

    if (isDirty) {
      trigger()
    } else {
      consuming = true
    }

    return unwatch
  }
  let unwatch = () => {
    consuming = false
    watcher = null
  }

  let parent = null
  let setParent = input => {
    parent = input
  }
  let getParent = () => {
    return parent
  }
  let deleteParent = () => {
    parent = null
  }

  let isDebug = false
  let debug = () => {
    isDebug = true
  }
  let undebug = () => {
    isDebug = false
  }

  let isDirty = false
  let notify = () => {
    isDirty = true

    if (!dirtyStateList.includes(currentProxy)) {
      dirtyStateList.push(currentProxy)
    }

    if (parent) {
      parent[XSTATE].notify()
    }
  }

  let isLock = false
  let onLock = null
  let lock = f => {
    isLock = true
    onLock = f
  }
  let unlock = () => {
    isLock = false
    onLock = null
    if (isDirty) trigger()
  }
  let trigger = () => {
    if (!watcher || isLock) {
      if (isLock && isFunction(onLock)) {
        onLock()
      }
      return
    }

    let f = watcher
    let nextProxy = compute()

    if (nextProxy !== currentProxy) {
      f(nextProxy)
    }
  }

  let compute = () => {
    if (!isDirty) return currentProxy

    isDirty = false

    /**
     * redo
     * create nextProxy based on scapegoat and target
     * reuse unchanged value as possible
     */
    let nextProxy = createWstate(scapegoat, currentProxy)
    /**
     * undo
     * clear scapegoat to keep currentProxy as immutable
     */
    scapegoat = null
    onLock = null
    deleteParent()
    unwatch()
    return nextProxy
  }

  let internal = {
    watch,
    setParent,
    getParent,
    deleteParent,
    notify,
    compute,
    trigger,
    lock,
    unlock,
    debug,
    undebug
  }

  let handlers: ProxyHandler<State> = {
    get: (target, key) => {
      if (key === XSTATE) return internal

      if (isMutable && scapegoat) {
        return Reflect.get(scapegoat, key)
      } else {
        return Reflect.get(target, key)
      }
    },
    set: (_, key, value) => {
      if (isMutable && scapegoat) {
        let result = Reflect.set(scapegoat, key, value)
        if (isDebug) debugger
        notify()
        return result
      } else {
        throw new Error(`state is immutable, it's not allowed to set property: ${key.toString()}`)
      }
    },
    deleteProperty: (_, key) => {
      if (isMutable && scapegoat) {
        let result = Reflect.deleteProperty(scapegoat, key)
        if (isDebug) debugger
        notify()
        return result
      } else {
        throw new Error(
          `state is immutable, it's not allowed to delete property: ${key.toString()}`
        )
      }
    },
    has: (target, key) => {
      if (isMutable && scapegoat) {
        return Reflect.has(scapegoat, key)
      } else {
        return Reflect.has(target, key)
      }
    },
    ownKeys: target => {
      if (isMutable && scapegoat) {
        return Reflect.ownKeys(scapegoat)
      } else {
        return Reflect.ownKeys(target)
      }
    },
    getPrototypeOf: target => {
      if (isMutable && scapegoat) {
        return Reflect.getPrototypeOf(scapegoat)
      } else {
        return Reflect.getPrototypeOf(target)
      }
    },
    setPrototypeOf: () => {
      throw new Error(
        `wstate only supports plain object or array, it's not allowed to setPrototypeOf`
      )
    },
    getOwnPropertyDescriptor: (target, prop) => {
      if (isMutable && scapegoat) {
        return Reflect.getOwnPropertyDescriptor(scapegoat, prop)
      } else {
        return Reflect.getOwnPropertyDescriptor(target, prop)
      }
    },
    defineProperty: (_, property) => {
      throw new Error(
        `wstate only supports plain object or array, it's not allowed to defineProperty: ${property.toString()}`
      )
    }
  }

  let currentProxy = new Proxy(target, handlers)

  if (isArray(currentProxy)) {
    fillArrayWstate(currentProxy, initialState, target, scapegoat, previousProxy)
  } else {
    fillObjectWstate(currentProxy, initialState, target, scapegoat, previousProxy)
  }

  // clear previousProxy
  previousProxy = null
  // clear initialState
  initialState = null

  return currentProxy
}

export default function<State extends object>(initialState: State) {
  return createWstate(initialState, null)
}

type Unwatch = () => void
type Watcher<T> = (state: T) => any

export const watch = <T extends object>(state: T, watcher: Watcher<T>): Unwatch => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }

  if (!isFunction(watcher)) {
    throw new Error(`Expected watcher to be a function, but received ${watcher}`)
  }

  return state[XSTATE].watch(watcher)
}

export const lock = <T extends object>(state: T, f?: Function) => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }
  state[XSTATE].lock(f)
}

export const unlock = <T extends object>(state: T) => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }
  state[XSTATE].unlock()
}

export const debug = <T extends object>(state: T) => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }
  state[XSTATE].debug()
}

export const undebug = <T extends object>(state: T) => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }
  state[XSTATE].undebug()
}

export const remove = <T extends object>(state: T) => {
  if (!isWstate(state)) {
    throw new Error(`Expected state to be a wstate, but received ${state}`)
  }

  let parent = state[XSTATE].getParent()

  if (!parent) return false

  if (isArray(parent)) {
    let index = parent.indexOf(state)
    parent.splice(index, 1)
    return true
  }

  if (isObject(parent)) {
    for (let key in parent) {
      let value = parent[key]
      if (value === state) {
        delete parent[key]
        return true
      }
    }
  }

  return false
}
