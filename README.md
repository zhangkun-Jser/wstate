# Welcome to wstate 👋

[![npm version](https://img.shields.io/npm/v/wstate.svg?style=flat)](https://www.npmjs.com/package/wstate)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/zhangkun-Jser/wstate#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/zhangkun-Jser/wstate/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/zhangkun-Jser/wstate/blob/master/LICENSE)

A library for finite state machines.

![matter state machine](examples/状态机.jpg_webp)

### How to handle complex and changeable state logic more elegantly ?

<br>

<br>

# Installation

Using npm:

```shell
npm install --save-dev wstate
```

In Node.js:

```javascript
const stateMachine = require("wstate");
```

# Usage

A state machine can be constructed using:

```js
import { createMachine } from "wstate";

const fsm = createMachine({
  init: "stand",
  states: {
    stand: {
      down: "squat",
      up: [
        "jump",
        (event, state) => {
          // handle jump callback
        },
      ],
    },
    squat: {
      down: "stand",
    },
    jump: {
      down: "cutdown",
    },
    cutdown: {
      up: "stand",
    },
  },
  onFail: (event, state) => {
    // Handle the callback of abnormal state machine
  },
});
```

... which creates an object with a current state property:

- `fsm.state`

... methods to transition to a different state:

- `fsm.up()`
- `fsm.down()`

... along with the following helper methods:

- `fsm.is(s)` - return true if state `s` is the current state
- `fsm.can(t)` - return true if transition `t` can occur from the current state
- `fsm.cannot(t)` - return true if transition `t` cannot occur from the current state
- `fsm.transitions()` - return list of transitions that are allowed from the current state
- `fsm.allTransitions()` - return list of all possible transitions
- `fsm.allStates()` - return list of all possible states

# in React Hooks

```jsx
import { useMachine, createMachine } from "wstate";

const fsm = createMachine({
  init: "stand",
  states: {
    stand: {
      down: "squat",
      up: [
        "jump",
        (event, state) => {
          // handle jump callback
        },
      ],
    },
    squat: {
      down: "stand",
    },
    jump: {
      down: "cutdown",
    },
    cutdown: {
      up: "stand",
    },
  },
  onFail: (event, state) => {
    // Handle the callback of abnormal state machine
  },
});

function App() {
  const [current, change] = useMachine(fsm);

  return (
    <div className="App">
      <span>当前的状态是{current}</span>
      <button onClick={() => change("down")}> 跳跃</button>
    </div>
  );
}
```

# Terminology

A state machine consists of a set of States

- stand
- cutdown
- squat
- jump

A state machine changes state by using Transitions

- up
- dowm

A state machine can also have arbitrary Data and Methods

Multiple instances of a state machine can be created using a State Machine Factory

The state machine does not own the state, it just defines the state and defines the state transition

State machines are very useful because they never cross the boundary. No matter what the input is, if the machine thinks it is feasible, then it will transition to the correct state, otherwise depending on your configuration, your state machine will stop transitioning or throw an error.

# Author

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
