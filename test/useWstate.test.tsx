import 'jest'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useWstate, useMutate } from '../src/react'

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

describe('useWstate', () => {
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
      let state = useWstate({ count: props.count || 0 })

      let incre = useMutate(() => {
        state.count += 1
      })

      return <button onClick={incre}>{state.count}</button>
    }

    act(() => {
      ReactDOM.render(<Test />, container)
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

  it('async usage', async () => {
    let deferred = createDeferred()
    let resolve = () => {
      deferred.resolve()
      deferred = createDeferred()
    }
    let Test = (props: { count?: number }) => {
      let state = useWstate({ count: props.count || 0 })

      let incre = useMutate(() => {
        state.count += 1
      })

      let handleClick = async () => {
        await delay()
        incre()
        resolve()
      }

      return <button onClick={handleClick}>{state.count}</button>
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let button = container.querySelector('button')

    expect(button.textContent).toBe('0')

    // tslint:disable-next-line: await-promise
    await act(async () => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await deferred.promise
    })

    expect(button.textContent).toBe('1')

    // tslint:disable-next-line: await-promise
    await act(async () => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await deferred.promise
    })

    expect(button.textContent).toBe('2')
  })

  it('can mutate state not matter which component it belongs', () => {
    let Child = ({ data }) => {
      let local = useWstate({ count: 0 })

      let handleClick = useMutate(() => {
        data.count += 1
        local.count += 1
      })

      return (
        <div id="child" onClick={handleClick}>
          {data.count + local.count}
        </div>
      )
    }

    let Parent = () => {
      let state = useWstate({ count: 0 })

      return <Child data={state}></Child>
    }

    act(() => {
      ReactDOM.render(<Parent />, container)
    })

    let div = container.querySelector('#child')

    expect(div.textContent).toBe('0')

    act(() => {
      div.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(div.textContent).toBe('2')

    act(() => {
      div.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(div.textContent).toBe('4')
  })

  it('can switch Wstate', () => {
    let Child = (props: { counter?: { count: number } }) => {
      let state = useWstate({ count: 0 }, props.counter)

      let handleClick = useMutate(() => {
        state.count += 1
      })

      return <div onClick={handleClick}>{state.count}</div>
    }

    let Parent = () => {
      let state = useWstate({ count: 10 })

      return (
        <>
          <Child />
          <Child counter={state} />
        </>
      )
    }

    act(() => {
      ReactDOM.render(<Parent />, container)
    })

    let divs = container.querySelectorAll('div')

    expect(divs[0].textContent).toBe('0')
    expect(divs[1].textContent).toBe('10')

    act(() => {
      divs[0].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      divs[1].dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(divs[0].textContent).toBe('1')
    expect(divs[1].textContent).toBe('11')

    act(() => {
      divs[0].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      divs[1].dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(divs[0].textContent).toBe('2')
    expect(divs[1].textContent).toBe('12')
  })

  it('can mutate state in useEffect', () => {
    let Child = ({ data }) => {
      let incre = useMutate(() => {
        data.count += 1
      })

      useEffect(() => {
        incre()
      }, [])

      return (
        <div id="child" onClick={incre}>
          {data.count}
        </div>
      )
    }

    let Parent = () => {
      let state = useWstate({ count: 0 })

      let incre = useMutate(() => {
        state.count += 1
      })

      useEffect(() => {
        incre()
      }, [])

      return <Child data={state}></Child>
    }

    act(() => {
      ReactDOM.render(<Parent />, container)
    })

    let div = container.querySelector('#child')

    expect(div.textContent).toBe('2')

    act(() => {
      div.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(div.textContent).toBe('3')

    act(() => {
      div.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(div.textContent).toBe('4')
  })

  it('can call mutate function many time in event-handler', () => {
    let Test = (props: { count?: number }) => {
      let state = useWstate({ count: props.count || 0 })

      let incre = useMutate(() => {
        state.count += 1
      })

      let handleClick = () => {
        incre()
        incre()
        incre()
      }

      return <button onClick={handleClick}>{state.count}</button>
    }

    act(() => {
      ReactDOM.render(<Test />, container)
    })

    let button = container.querySelector('button')

    expect(button.textContent).toBe('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('3')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(button.textContent).toBe('6')
  })
})
