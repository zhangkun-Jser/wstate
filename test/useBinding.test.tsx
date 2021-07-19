import 'jest'
import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useWstate, useMutate, useBinding } from '../src/react'
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

describe('useBinding', () => {
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
    let Test = (props: { count?: number }) => {
      let original = useWstate({ count: props.count || 0, unchanged: 0 })

      let { count } = useBinding(original)

      let increOriginal = useMutate(() => {
        original.count += 1
      })

      let increBinding = useMutate(() => {
        count.value += 1
      })

      let increBoth = () => {
        increOriginal()
        increBinding()
      }

      return (
        <>
          <button onClick={increOriginal} id="original">
            {original.count}
          </button>
          <button onClick={increBinding} id="binding">
            {count.value}
          </button>
          <button onClick={increBoth} id="both">
            {original.count + count.value}
          </button>
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let original = container.querySelector('#original')
    let binding = container.querySelector('#binding')
    let both = container.querySelector('#both')

    expect(original.textContent).toBe('0')
    expect(binding.textContent).toBe('0')
    expect(both.textContent).toBe('0')

    // click original
    act(() => {
      original.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('1')
    expect(binding.textContent).toBe('1')
    expect(both.textContent).toBe('2')

    // click binding
    act(() => {
      binding.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('2')
    expect(binding.textContent).toBe('2')
    expect(both.textContent).toBe('4')

    // click both
    act(() => {
      both.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(original.textContent).toBe('4')
    expect(binding.textContent).toBe('4')
    expect(both.textContent).toBe('8')
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
      let { count } = useBinding(state)

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

  it('support multiple field', () => {
    let Test = () => {
      let state = useWstate({ a: 1, b: 2 })

      let { a, b } = useBinding(state)

      let handleClickA = useMutate(() => {
        a.value += 1
      })

      let handleClickB = useMutate(() => {
        b.value += 1
      })

      return (
        <>
          <button id="a" onClick={handleClickA}>
            {state.a}
          </button>
          <button id="b" onClick={handleClickB}>
            {state.b}
          </button>
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let a = container.querySelector('#a')
    let b = container.querySelector('#b')

    expect(a.textContent).toBe('1')
    expect(b.textContent).toBe('2')

    // click a
    act(() => {
      a.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(a.textContent).toBe('2')
    expect(b.textContent).toBe('2')

    // click b
    act(() => {
      b.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(a.textContent).toBe('2')
    expect(b.textContent).toBe('3')

    // click a
    act(() => {
      a.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      b.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(a.textContent).toBe('3')
    expect(b.textContent).toBe('4')
  })
})
