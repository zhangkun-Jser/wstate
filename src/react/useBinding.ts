import { useMemo } from 'react'
import useComputed from './useComputed'

type BindingState<S extends object> = {
  [key in keyof S]: {
    value: S[key]
  }
}

const binding = <S extends object>(state: S, key: keyof S) => {
  return useComputed(
    {
      get value() {
        return state[key]
      },
      set value(value) {
        state[key] = value
      }
    },
    [state[key]]
  )
}

const handlers = { get: binding }

export default function useBinding<S extends object>(state: S) {
  return useMemo(() => new Proxy(state, handlers), [state]) as BindingState<S>
}
