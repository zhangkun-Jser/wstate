import createWstate, { watch } from './createWstate'
import { isFunction } from './util'

export default function createStore<T extends object>(initialState: T) {
  let current = createWstate(initialState)

  let getState = () => current

  let listenerList = []

  type Listener = (state: T) => any

  let subscribe = (listener: Listener) => {
    if (!isFunction(listener)) {
      throw new Error(`Expected listener to be a function, but got ${listener}`)
    }

    if (!listenerList.includes(listener)) {
      listenerList.push(listener)
    }

    return () => {
      let index = listenerList.indexOf(listener)
      if (index !== -1) {
        listenerList.splice(index, 1)
      }
    }
  }

  let publish = state => {
    current = state
    watch(current, publish)

    let list = [...listenerList]

    for (let i = 0; i < list.length; i++) {
      let listener = list[i]

      if (listenerList.includes(listener)) {
        listener(current)
      }
    }
  }

  watch(current, publish)

  return {
    getState,
    subscribe
  }
}
