import 'jest'
import createWstate, { mutate, watch, remove, isWstate, lock, unlock } from '../src/createWstate'

describe('createWstate', () => {
  it('should throw error when createWstate got invalide arguments', () => {
    expect(() => {
      createWstate(undefined)
    }).toThrow()

    expect(() => {
      createWstate(1 as any)
    }).toThrow()

    expect(() => {
      createWstate('123' as any)
    }).toThrow()

    expect(() => {
      createWstate(null)
    }).toThrow()

    createWstate([])
    createWstate({})
  })

  it('can be detected by isWstate', () => {
    expect(isWstate(1)).toBe(false)
    expect(isWstate('1')).toBe(false)
    expect(isWstate([])).toBe(false)
    expect(isWstate({})).toBe(false)
    expect(isWstate(null)).toBe(false)
    expect(isWstate(undefined)).toBe(false)
    expect(isWstate(() => {})).toBe(false)
    expect(isWstate(createWstate({}))).toBe(true)
    expect(isWstate(createWstate([]))).toBe(true)
  })

  it('should not reuse or mutate state which is came from arguments', () => {
    let initialState = {
      a: 1
    }
    let state0 = createWstate(initialState)

    expect(state0 !== initialState).toBe(true)

    let state1 = createWstate(state0)

    expect(state1 !== state0).toBe(true)
    expect(state1 !== initialState)

    expect(state1).toEqual({
      a: 1
    })
    expect(state0).toEqual({
      a: 1
    })
    expect(initialState).toEqual({
      a: 1
    })
  })

  it('can be watched', () => {
    let state = createWstate({ count: 0 })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      expect(nextState !== state).toBe(true)
      expect(state.count).toBe(0)
      expect(nextState.count).toBe(1)
      n += 1
    })

    mutate(() => {
      state.count += 1
    })

    expect(n).toBe(1)
    expect(state.count).toBe(0)
  })

  it('can be unwatched', () => {
    let state = createWstate({ count: 0 })

    let unwatch = watch(state, () => {
      throw new Error('unwatch failed')
    })

    unwatch()

    mutate(() => {
      state.count += 1
    })

    expect(state.count).toBe(0)
  })

  it('should detect object mutation', () => {
    let state = createWstate({
      a: 1,
      b: 2,
      c: 3
    } as {
      a: number
      b: number
      c: number
      d?: number
    })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)

      n += 1

      expect(nextState).toEqual({
        a: 2,
        c: 3,
        d: 1
      })

      expect(state).toEqual({
        a: 1,
        b: 2,
        c: 3
      })
    })

    mutate(() => {
      // replace
      state.a += 1

      // delete
      delete state.b

      // add
      state.d = 1
    })

    expect(n).toBe(1)
  })

  it('should detect list mutation', () => {
    let list = createWstate([1, 2, 3, 4, 5, 6])
    let n = 0

    watch(list, nextList => {
      expect(n).toBe(0)
      expect(nextList).toEqual([2, 3, 4, 5, 6, 3])
      expect(list).toEqual([1, 2, 3, 4, 5, 6])
      n += 1
    })

    mutate(() => {
      // replace
      list[0] = 2

      // delete
      list.splice(1, 1)

      // add
      list.push(3)
    })

    expect(n).toBe(1)
  })

  it('should support deep update', () => {
    let state = createWstate([
      {
        a: {
          b: {
            c: {
              d: [1, 2, 3],
              e: 2,
              f: 1
            }
          }
        }
      }
    ])
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(nextState).toEqual([
        {
          a: {
            b: {
              c: {
                d: [2, 3, 4],
                e: 3
              }
            }
          }
        }
      ])
    })

    mutate(() => {
      // add item
      state[0].a.b.c.d.push(4)
      // remove item
      state[0].a.b.c.d.shift()
      // replace property value
      state[0].a.b.c.e += 1
      // delete
      delete state[0].a.b.c.f
    })

    expect(n).toBe(1)
  })

  it('should throw error when mutate(f) got async function or return promise', () => {
    expect(() => {
      // tslint:disable-next-line: no-floating-promises
      mutate(async () => {
        //
      })
    }).toThrow()

    expect(() => {
      // tslint:disable-next-line: no-floating-promises
      mutate(() => {
        return Promise.resolve()
      })
    }).toThrow()
  })

  it('should throw error when mutate state out of mutate function', () => {
    let state = createWstate({ count: 0 })

    expect(() => {
      state.count += 1
    }).toThrow()
  })

  it('should throw error when mutate state in watcher function', () => {
    let state = createWstate({ count: 0 })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)

      n += 1

      expect(() => {
        state.count += 1
      }).toThrow()

      expect(() => {
        nextState.count += 1
      }).toThrow()
    })

    mutate(() => {
      state.count += 1
    })

    expect(n).toBe(1)
  })

  it('should throw error when watch a state twice', () => {
    let state = createWstate({ a: 1 })

    let unwatch = watch(state, () => {
      // empty
    })

    expect(() => {
      watch(state, () => {
        // empty
      })
    }).toThrow()

    unwatch()

    watch(state, () => {
      // empty
    })
  })

  it('should throw error when watch a state which is not a Wstate or watcher is not a function', () => {
    expect(() => {
      watch({}, () => {
        //
      })
    }).toThrow()

    expect(() => {
      watch(createWstate({}), 1 as any)
    })
  })

  it('should batch all mutation into one update when mutate state', () => {
    let state = createWstate({ a: 1, b: 2, c: 3 })

    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(nextState).toEqual({
        a: 2,
        b: 3
      })

      expect(state).toEqual({
        a: 1,
        b: 2,
        c: 3
      })
    })

    mutate(() => {
      state.a += 1
      state.b += 1
      delete state.c
    })

    expect(n).toBe(1)
  })

  it('can batch multiple states changed and trigger watcher in mutated order', () => {
    let state0 = createWstate({ a: 1 })
    let state1 = createWstate({ a: 2 })
    let n = 0

    watch(state0, nextState0 => {
      expect(n).toBe(1)
      n += 1
      expect(nextState0).toEqual({
        a: 2
      })
    })

    watch(state1, nextState0 => {
      expect(n).toBe(0)
      n += 1
      expect(nextState0).toEqual({
        a: 1
      })
    })

    mutate(() => {
      state1.a -= 1
      state0.a += 1
    })

    expect(n).toBe(2)
  })

  it('mutate function can return value', () => {
    let state = createWstate({ count: 0 })

    let n = mutate(() => {
      state.count += 1
      return state.count
    })

    expect(state.count).toBe(0)
    expect(n).toBe(1)
  })

  it('mutate function can be nest', () => {
    let state = createWstate({ count: 0 })
    let i = 0

    watch(state, nextState => {
      expect(i).toBe(0)
      expect(nextState)
    })

    let n = mutate(() => {
      state.count += 1
      return mutate(() => {
        state.count += 1
        return state.count
      })
    })

    expect(state.count).toBe(0)
    expect(n).toBe(2)
  })

  it('can remove object property by remove function', () => {
    let state = createWstate({
      a: {
        value: 1
      }
    })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1
      expect(nextState).toEqual({})
      expect(state).toEqual({
        a: {
          value: 1
        }
      })
    })

    expect(() => {
      remove(state.a)
    }).toThrow()

    mutate(() => {
      remove(state.a)
    })
  })

  it('can remove list item by remove function', () => {
    let state = createWstate([{ value: 1 }, { value: 2 }, { value: 3 }])
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1
      expect(nextState).toEqual([{ value: 1 }, { value: 3 }])
      expect(state).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
      expect(state[0] === nextState[0]).toBe(true)
      expect(state[2] === nextState[1]).toBe(true)
    })

    mutate(() => {
      remove(state[1])
    })

    expect(n).toBe(1)
  })

  it('should throw error when remove target is not a Wstate', () => {
    expect(() => {
      remove({})
    }).toThrow()
  })

  it('should support structural sharing', () => {
    let state = createWstate({
      a: [{ value: 1 }, { value: 2 }, { value: 3 }],
      b: [{ value: 1 }, { value: 2 }, { value: 3 }],
      c: [{ value: 1 }, { value: 2 }, { value: 3 }]
    } as {
      a: { value: number }[]
      b: { value: number }[]
      c: { value: number }[]
      d?: { value: number }[]
    })

    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(nextState).toEqual({
        a: [{ value: 2 }, { value: 2 }, { value: 3 }],
        b: [{ value: 1 }, { value: 2 }, { value: 4 }],
        c: [{ value: 1 }, { value: 2 }, { value: 3 }],
        d: [{ value: 1 }, { value: 2 }, { value: 3 }]
      })

      expect(state.c === nextState.c).toBe(true)

      expect(state.a[1] === nextState.a[1]).toBe(true)
      expect(state.a[2] === nextState.a[2]).toBe(true)

      expect(state.b[0] === nextState.b[0]).toBe(true)
      expect(state.b[1] === nextState.b[1]).toBe(true)

      expect(state.c[0] === nextState.c[0]).toBe(true)
      expect(state.c[1] === nextState.c[1]).toBe(true)
      expect(state.c[2] === nextState.c[2]).toBe(true)
    })

    mutate(() => {
      state.a[0].value += 1
      state.b[2].value += 1
      state.d = [{ value: 1 }, { value: 2 }, { value: 3 }]
    })

    expect(n).toBe(1)
  })

  it('access state property should works correctly in mutate function', () => {
    let state = createWstate([
      { a: 1, b: 2 },
      { a: 1, b: 1 }
    ] as {
      a: number
      b: number
      c?: number
    }[])
    let n = 0

    mutate(() => {
      n += 1

      expect(state.length).toBe(2)

      state[0].a += 1

      expect(state[0].a).toBe(2)

      state.pop()

      expect(state.length).toBe(1)

      expect('a' in state[0]).toBe(true)

      delete state[0].a

      expect('a' in state[0]).toBe(false)

      expect(Object.getOwnPropertyNames(state[0])).toEqual(['b'])

      state[0].c = 1

      expect(Object.getOwnPropertyNames(state[0])).toEqual(['b', 'c'])

      expect(state[0].c).toBe(1)
    })

    expect('a' in state[0]).toBe(true)
    expect('b' in state[0]).toBe(true)
    expect('c' in state[0]).toBe(false)
    expect(Object.getOwnPropertyNames(state[0])).toEqual(['a', 'b'])

    expect(n).toBe(1)
  })

  it('should throw error when watcher is not a function', () => {
    let state = createWstate({ count: 1 })

    expect(() => {
      watch(state, 1 as any)
    }).toThrow()
  })

  it('should trigger watcher directly when state has been mutated', () => {
    let state = createWstate({ count: 1 })
    let n = 0

    mutate(() => {
      state.count += 1
    })

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1
      expect(nextState).toEqual({ count: 2 })
    })

    expect(state).toEqual({ count: 1 })
    expect(n).toBe(1)
  })

  it('should throw error when mutate a state(which has been watched) more than once', () => {
    let state = createWstate({ count: 1 })

    watch(state, nextState => {
      expect(nextState).toEqual({ count: 2 })
    })

    mutate(() => {
      state.count += 1
    })

    expect(() => {
      mutate(() => {
        state.count += 1
      })
    }).toThrow()
  })

  it('should throw error when watch a non-root state', () => {
    let state = createWstate({ a: { value: 1 } })

    expect(() => {
      watch(state.a, () => {
        // nothing
      })
    }).toThrow()
  })

  it('should throw error when mutate function got invalid arguments', () => {
    mutate(() => {
      // nothing
    })

    expect(() => {
      mutate(1 as any)
    }).toThrow()
  })

  it('should reuse object property correctly', () => {
    let state = createWstate({
      a: {
        value: 1
      },
      b: {
        value: 2
      }
    } as {
      a: {
        value: number
      }
      b: {
        value: number
      }
      c?: {
        value: number
      }
    })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(state.a === nextState.b).toBe(true)
      expect(state.b === nextState.a).toBe(true)

      // should state when the value already existed
      expect(state.a === nextState.c).toBe(false)

      expect(nextState).toEqual({
        a: {
          value: 2
        },
        b: {
          value: 1
        },
        c: {
          value: 1
        }
      })
    })

    mutate(() => {
      let { a, b } = state

      state.a = b
      state.b = a
      state.c = a

      expect(state.b === state.c).toEqual(true)
    })

    expect(n).toBe(1)
  })

  it('should reuse list item correctly', () => {
    let state = createWstate([{ value: 1 }, { value: 2 }, { value: 3 }])
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(nextState).toEqual([{ value: 3 }, { value: 1 }, { value: 2 }, { value: 3 }])
      expect(state).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])

      expect(nextState[0] === state[2]).toBe(true)
      expect(nextState[1] === state[0]).toBe(true)
      expect(nextState[2] === state[1]).toBe(true)

      // should recreate state when the value already existed
      expect(nextState[3] !== state[2]).toBe(true)
    })

    mutate(() => {
      let [a, b, c] = state

      state[0] = c
      state[1] = a
      state[2] = b
      state[3] = c
    })

    expect(n).toBe(1)
  })

  it('should only reuse state at the same layer', () => {
    let state = createWstate({
      a: { count: 0 },
      b: {
        value: { count: 1 }
      }
    })
    let n = 0

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1

      expect(nextState).toEqual({
        a: { count: 1 },
        b: { value: { count: 0 } }
      })

      expect(nextState.a === state.b.value).toBe(false)
    })

    mutate(() => {
      let a = state.a
      state.a = state.b.value
      state.b.value = a
    })

    expect(n).toBe(1)
  })

  it('can lock and unlock state', () => {
    let state = createWstate({ count: 1 })
    let n = 0

    lock(state)

    watch(state, nextState => {
      expect(n).toBe(0)
      n += 1
      expect(nextState).toEqual({
        count: 3
      })
    })

    mutate(() => {
      expect(state).toEqual({ count: 1 })
      state.count += 1
    })

    expect(state).toEqual({ count: 1 })

    mutate(() => {
      expect(state).toEqual({ count: 2 })
      state.count += 1
    })

    expect(state).toEqual({ count: 1 })

    unlock(state)

    expect(state).toEqual({ count: 1 })

    expect(n).toBe(1)
  })
})
