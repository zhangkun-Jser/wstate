import 'jest'
import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useWstate, useMutate, useComputed } from '../src/react'
import { isWstate } from '../src'

const delay = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout))

const createDeferred = () => {
  let resolve
  let reject
  let promise = new Promise((a, b) => {
    resolve = a
    reject = b
  })
  return { resolve, reject, promise }
}

describe('useComputed', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('basic usage', () => {
    let count = 0
    let Test = (props: { count?: number }) => {
      let original = useWstate({ count: props.count || 0, unchanged: 0 })

      let computed = useComputed(
        {
          get value() {
            return original.count + 1
          },
          set value(count) {
            original.count = count - 1
          }
        },
        [original.count]
      )

      let increOriginal = useMutate(() => {
        original.count += 1
      })

      let increComputed = useMutate(() => {
        computed.value += 1
      })

      let increBoth = () => {
        increOriginal()
        increComputed()
      }

      let unchanged = useComputed(
        {
          get value() {
            return original.unchanged
          },
          set value(value) {
            original.unchanged = value
          }
        },
        [original.unchanged]
      )

      let increUnchanged = useMutate(() => {
        unchanged.value += 1
      })

      useEffect(() => {
        if (count === 0) {
          expect(unchanged.value).toBe(0)
        }

        if (count === 1) {
          expect(unchanged.value).toBe(1)
        }

        if (count > 1) {
          throw new Error('Failed to keep unchanged state unchanged')
        }

        count += 1
      }, [unchanged])

      return (
        <>
          <button onClick={increOriginal} id="original">
            {original.count}
          </button>
          <button onClick={increComputed} id="computed">
            {computed.value}
          </button>
          <button onClick={increBoth} id="both">
            {original.count + computed.value}
          </button>

          <button onClick={increBoth} id="both">
            {original.count + computed.value}
          </button>

          <button onClick={increUnchanged} id="unchanged">
            {original.unchanged}
          </button>
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let original = container.querySelector('#original')
    let computed = container.querySelector('#computed')
    let both = container.querySelector('#both')
    let unchanged = container.querySelector('#unchanged')

    expect(original.textContent).toBe('0')
    expect(computed.textContent).toBe('1')
    expect(both.textContent).toBe('1')
    expect(unchanged.textContent).toBe('0')

    // click original
    act(() => {
      original.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('1')
    expect(computed.textContent).toBe('2')
    expect(both.textContent).toBe('3')
    expect(unchanged.textContent).toBe('0')

    // click computed
    act(() => {
      computed.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('2')
    expect(computed.textContent).toBe('3')
    expect(both.textContent).toBe('5')
    expect(unchanged.textContent).toBe('0')

    // click both
    act(() => {
      both.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('4')
    expect(computed.textContent).toBe('5')
    expect(both.textContent).toBe('9')
    expect(unchanged.textContent).toBe('0')

    // click unchanged
    act(() => {
      unchanged.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('4')
    expect(computed.textContent).toBe('5')
    expect(both.textContent).toBe('9')
    expect(unchanged.textContent).toBe('1')
  })

  it('supports multiple fileds', () => {
    let Test = () => {
      let original = useWstate({
        name: {
          first: 'Karasawa',
          last: 'Yukiho'
        }
      })

      let computed = useComputed(
        {
          get first() {
            return original.name.first
          },
          set first(value) {
            original.name.first = value
          },
          get last() {
            return original.name.last
          },
          set last(value) {
            original.name.last = value
          },
          // non getter/setter
          name: original.name.first + ' ' + original.name.last
        },
        [original.name]
      )

      let handleClickOriginal = useMutate(() => {
        original.name.first = 'Kirihara'
        original.name.last = 'Ryouji'
      })

      let handleClickComputed = useMutate(() => {
        computed.first = 'Karasawa'
        computed.last = 'Yukiho'
      })

      return (
        <>
          <button onClick={handleClickOriginal} id="original">
            {original.name.first} {original.name.last}
          </button>
          <button onClick={handleClickComputed} id="computed">
            {computed.name}
          </button>
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let original = container.querySelector('#original')
    let computed = container.querySelector('#computed')

    expect(original.textContent).toBe('Karasawa Yukiho')
    expect(computed.textContent).toBe('Karasawa Yukiho')

    // click original
    act(() => {
      original.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('Kirihara Ryouji')
    expect(computed.textContent).toBe('Kirihara Ryouji')

    // click computed
    act(() => {
      computed.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('Karasawa Yukiho')
    expect(computed.textContent).toBe('Karasawa Yukiho')
  })

  it('can pass to child component', () => {
    let Child = ({ count }) => {
      let handleClick = useMutate(() => {
        count.value += 1
      })
      return (
        <button onClick={handleClick} id="child">
          {count.value}
        </button>
      )
    }

    let Parent = () => {
      let state = useWstate({ count: 0 })
      let count = useComputed({
        get value() {
          return state.count
        },
        set value(value) {
          state.count = value
        }
      })

      let handleClick = useMutate(() => {
        state.count += 1
      })

      return (
        <>
          <button onClick={handleClick} id="parent">
            {state.count}
          </button>
          <Child count={count} />
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Parent />, container)
    })

    let parent = container.querySelector('#parent')
    let child = container.querySelector('#child')

    expect(parent.textContent).toBe('0')
    expect(child.textContent).toBe('0')

    // click parent
    act(() => {
      parent.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(parent.textContent).toBe('1')
    expect(child.textContent).toBe('1')

    // click child
    act(() => {
      child.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(parent.textContent).toBe('2')
    expect(child.textContent).toBe('2')

    // click both
    act(() => {
      parent.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      child.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(parent.textContent).toBe('4')
    expect(child.textContent).toBe('4')
  })
})
