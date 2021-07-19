import 'jest'
import React, { useEffect, FC } from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useWstate, useMutate, view, useAttr, useAttrs } from '../src/react'
import { isWstate } from '../src/createWstate'

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

describe('view', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('useAttrs', () => {
    let Counter = view(() => {
      let { count } = useAttrs({
        count: { value: 0 }
      })

      let handleClick = useMutate(() => {
        count.value += 1
      })

      return <button onClick={handleClick}>{count.value}</button>
    })

    act(() => {
      ReactDOM.render(<Counter />, container)
    })

    let button = container.querySelector('button')

    expect(button.textContent).toBe('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('1')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('2')
  })

  it('useAttr', () => {
    let Counter = view(() => {
      let count = useAttr('count', { value: 0 })

      let handleClick = useMutate(() => {
        count.value += 1
      })

      return <button onClick={handleClick}>{count.value}</button>
    })

    act(() => {
      ReactDOM.render(<Counter />, container)
    })

    let button = container.querySelector('button')

    expect(button.textContent).toBe('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('1')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('2')
  })

  it('should support two-way data binding via useAttr', () => {
    type ChildProps = { count?: { value: number } }
    type ChildComponent = FC<ChildProps>

    let Child: ChildComponent = view(() => {
      let count = useAttr('count', { value: 0 })
      let handleClick = useMutate(() => {
        count.value += 1
      })

      return <button onClick={handleClick}>{count.value}</button>
    })

    let Parent = () => {
      let count = useWstate({ value: 10 })
      let incre = useMutate(() => {
        count.value += 1
      })

      useEffect(incre, [])

      return (
        <>
          <Child count={count} />
          <span>{count.value}</span>
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Parent />, container)
    })

    let button = container.querySelector('button')
    let span = container.querySelector('span')

    expect(button.textContent).toBe('11')
    expect(span.textContent).toBe('11')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('12')
    expect(span.textContent).toBe('12')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('13')
    expect(span.textContent).toBe('13')
  })
})
