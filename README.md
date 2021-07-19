# Welcome to wstate 👋

[![npm version](https://img.shields.io/npm/v/wstate.svg?style=flat)](https://www.npmjs.com/package/wstate)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/zhangkun-Jser/wstate#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/zhangkun-Jser/wstate/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/zhangkun-Jser/wstate/blob/master/LICENSE)

> Create the next immutable state tree by simply modifying the current tree

**wstate** is a tiny package that allows you to work with the immutable state in a more mutable and reactive way, inspired by vue 3.0 reactivity API and immer.

### 🏠 [Homepage](https://github.com/zhangkun-Jser/wstate#readme)

## Benefits

**wstate** is like immer but more reactive

- Immutability with normal JavaScript objects and arrays. No new APIs to learn!
- Strongly typed, no string based paths selectors etc.
- Structural sharing out of the box
- Deep updates are a breeze
- Boilerplate reduction. Less noise, more concise code.
- Provide react-hooks API
- Small size
- Reactive

## Environment Requirement

- ES2015 Proxy
- ES2015 Symbol

[Can I Use Proxy?](https://caniuse.com/#search=Proxy)

## How it works

Every immutable state is wrapped by a proxy, has a scapegoat state by the side.

`immutable state` + `scapegoat state` = **wstate**

- the immutable target is freezed by proxy
- scapegoat has the same value as the immutable target
- mutate(() => { **the_mutable_world** }), when calling `mutate(f)`, it will
  - switch all operations to scapegoat instead of the immutable target when executing
  - switch back to the immutable target after executed
  - create the next wstate via `scapegoat` and `target`, sharing the unchanged parts
  - we get two immutable states now

## Install

```sh
npm install --save wstate
```

```sh
yarn add wstate
```

## Usage

### Counter

```javascript
import React from 'react'
// import react-hooks api from wstate/react
import { useWstate, useMutate } from 'wstate/react'

export default function Counter() {
  // create state via useWstate
  let state = useWstate({ count: 0 })

  // safely mutate state via useMutate
  let incre = useMutate(() => {
    state.count += 1
  })

  let decre = useMutate(() => {
    state.count -= 1
  })

  return (
    <div>
      <button onClick={incre}>+1</button>
      {state.count}
      <button onClick={decre}>-1</button>
    </div>
  )
}
```

### TodoApp

```javascript
function Todo({ todo }) {
  let edit = useWstate({ value: false })
  /**
   * wstate text is reactive
   * we will pass the text down to TodoInput without the need of manually update it in Todo
   * */
  let text = useWstate({ value: '' })

  // create a mutable function via useMutate
  let handleEdit = useMutate(() => {
    edit.value = !edit.value
    text.value = todo.content
  })

  let handleEdited = useMutate(() => {
    edit.value = false
    if (text.value === '') {
      // remove the todo from todos via remove function
      remove(todo)
    } else {
      // mutate todo even it is not a local wstate
      todo.content = text.value
    }
  })

  let handleKeyUp = useMutate((event) => {
    if (event.key === 'Enter') {
      handleEdited()
    }
  })

  let handleRemove = useMutate(() => {
    remove(todo)
  })

  let handleToggle = useMutate(() => {
    todo.completed = !todo.completed
  })

  return (
    <li>
      <button onClick={handleRemove}>remove</button>
      <button onClick={handleToggle}>{todo.completed ? 'completed' : 'active'}</button>
      {edit.value && <TodoInput text={text} onBlur={handleEdited} onKeyUp={handleKeyUp} />}
      {!edit.value && <span onClick={handleEdit}>{todo.content}</span>}
    </li>
  )
}

function TodoInput({ text, ...props }) {
  let handleChange = useMutate((event) => {
    /**
     * we just simply and safely mutate text at one place
     * instead of every parent components need to handle `onChange` event
     */
    text.value = event.target.value
  })
  return <input type="text" {...props} onChange={handleChange} value={text.value} />
}
```

## API

```javascript
import { createStore, mutate, remove, isWstate, debug, undebug } from 'wstate'
import {
  useWstate,
  useMutate,
  useWreducer,
  useComputed,
  useBinding,
  view,
  useAttr,
  useAttrs,
} from 'wstate/react'
```

### useWstate(array | object, wstate?) -> wstate

receive an array or an object, return wstate.

if the second argument is another wstate which has the same shape with the first argument, return the second argument instead.

```javascript
let Child = (props: { counter?: { count: number } }) => {
  // if props.counter is existed, use props.counter, otherwise use local wstate.
  let state = useWstate({ count: 0 }, props.counter)

  let handleClick = useMutate(() => {
    state.count += 1
  })

  return <div onClick={handleClick}>{state.count}</div>
}

// use local wstate
<Child />
// use parent wstate
<Child counter={state} />
```

### useMutate((...args) => any_value) -> ((...args) => any_value)

receive a function as argument, return the mutable_function

it's free to mutate any wstates in mutable_function, not matter where they came from(they can belong to the parent component)

### useWreducer(reducer, initialState) -> [state, dispatch]

receive a reducer and an initial state, return a pair [state, dispatch]

its' free to mutate any wstates in the reducer funciton

```javascript
import { useWreducer } from 'wstate/react'

const Test = () => {
  let [state, dispatch] = useWreducer(
    (state, action) => {
      if (action.type === 'incre') {
        state.count += 1
      }

      if (action.type === 'decre') {
        state.count -= 1
      }
    },
    { count: 0 }
  )

  let handleIncre = () => {
    dispatch({ type: 'incre' })
  }

  let handleIncre = () => {
    dispatch({ type: 'decre' })
  }

  // render view
}
```

### useComputed(obj, deps) -> obj

Create computed state

```javascript
let state = useWstate({ first: 'a', last: 'b' })

// use getter/setter
let computed = useComputed(
  {
    get value() {
      return state.first + ' ' + state.last
    },
    set value(name) {
      let [first, last] = name.split(' ')
      state.first = first
      state.last = last
    },
  },
  [state.first, state.last]
)

let handleEvent = useMutate(() => {
  console.log(computed.value) // 'a b'
  // update
  computed.value = 'Bill Gates'

  console.log(state.first) // Bill
  console.log(state.last) // Gates
})
```

### useBinding(wstate) -> obj

Create binding state

A binding state is an object has only one filed `{ value }`

```javascript
let state = useWstate({ text: 'some text' })

let { text } = useBinding(state)

// don't do this
// access field will trigger a react-hooks
// you should always use ECMAScript 6 (ES2015) destructuring to get binding state
let bindingState = useBinding(state)
if (xxx) xxx = bindingState.xxx

let handleChange = () => {
  console.log(text.value) // some text
  console.log(state.text) // some text
  text.value = 'some new text'
  console.log(text.value) // some new text
  console.log(state.text) // some new text
}
```

It's useful when child component needs binding state, but parent component state is not.

```javascript
function Input({ text, ...props }) {
  let handleChange = useMutate((event) => {
    /**
     * we just simply and safely mutate text at one place
     * instead of every parent components need to handle `onChange` event
     */
    text.value = event.target.value
  })
  return <input type="text" {...props} onChange={handleChange} value={text.value} />
}

function App() {
  let state = useWstate({
    fieldA: 'A',
    fieldB: 'B',
    fieldC: 'C',
  })
  let { fieldA, fieldB, fieldC } = useBinding(state)

  return (
    <>
      <Input text={fieldA} />
      <Input text={fieldB} />
      <Input text={fieldC} />
    </>
  )
}
```

### view(FC) -> FC

create a two-way data binding function-component

```javascript

const Counter = view(props => {
  // Counter will not know the count is local or came from the parent
  let count = useAttr('count', { value: 0 })

  let handleClick = useMutate(() => {
    count.value += 1
  })

  return <button onClick={handleClick}>{count.value}</button>
})

// use local wstate
<Counter />

// create a two-way data binding connection with parent wstate
<Count count={parentWstate.count} />
```

### useAttrs(initValue) -> Record<string, wstate>

create a record of wstate, when the value in props[key] is wstate, connect it.

useAttrs must use in view(fc)

```javascript

const Test = view(() => {
  // Counter will not know the count is local or came from the parent
  let attrs = useAttrs({ count: { value: 0 } })

  let handleClick = useMutate(() => {
    attrs.count.value += 1
  })

  return <button onClick={handleClick}>{attrs.count.value}</button>
})

// use local wstate
<Counter />

// create a two-way data binding connection with parent wstate
<Count count={parentWstate.count} />
```

### useAttr(key, initValue) -> wstate

a shortcut of `useAttrs({ [key]: initValue })[key]`, it's useful when we want to separate attrs

### createStore(initialState) -> { subscribe, getState }

create a store with an initial state

#### store.subscribe(listener) -> unlisten

subscribe to the store, and return an unlisten function

Every time the state has been mutated, a new state will publish to every listener.

#### store.getState() -> state

get the current state in the store

```javascript
let store = createStore({ count: 1 })
let state = store.getState()

let unlisten = store.subscribe((nextState) => {
  expect(state).toEqual({ count: 1 })
  expect(nextState).toEqual({ count: 2 })
  unlisten()
})

mutate(() => {
  state.count += 1
})
```

### mutate(f) -> value_returned_by_f

immediately execute the function and return the value

it's free to mutate the wstate in mutate function

### remove(wstate) -> void

remove the wstate from its parent

### isWstate(input) -> boolean

check if input is a wstate or not

### debug(wstate) -> void

enable debug mode, break point when wstate is mutating

### undebug(wstate) -> void

disable debug mode

## Caveats

- only supports array and object, other data types are not allowed

- wstate is unidirectional, any object or array appear only once, no circular references existed

```javascript
let state = useWstate([{ value: 1 }])

mutate(() => {
  state.push(state[0])
  // nextState[0] is equal to state[0]
  // nextState[1] is not equal to state[0], it's a new one
})
```

- can not spread object or array as props, it will lose the reactivity connection in it, should pass the reference

```javascript

// don't do this
<Todo {...todo} />

// do this instead
<Todo todo={todo} />
```

- can not edit state or props via react-devtools, the same problem as above

- useMutate or mutate do not support async function

```javascript
const Test = () => {
  let state = useWstate({ count: 0 })

  // don't do this
  let handleIncre = useMutate(async () => {
    let n = await fetchData()
    state.count += n
  })

  // do this instead
  let incre = useMutate((n) => {
    state.count += n
  })

  let handleIncre = async () => {
    let n = await fetchData()
    incre(n)
  }

  return <div onClick={handleIncre}>test</div>
}
```

## Author

👤 **keenzhang**

- Github: [@keenzhang](https://github.com/zhangkun-Jser)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/zhangkun-Jser/wstate/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [keenzhang](https://github.com/zhangkun-Jser).

This project is [MIT](https://github.com/zhangkun-Jser/wstate/blob/master/LICENSE) licensed.

---
