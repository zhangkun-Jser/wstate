import { useMemo } from 'react'
import useStaticFunction from './useStaticFunction'

export default function useComputed<S extends object>(state: S, deps?: any[]) {
  let setter = useStaticFunction((key, value) => {
    let descriptor = Object.getOwnPropertyDescriptor(state, key)
    if (descriptor.set) {
      descriptor.set(value)
    } else {
      state[key] = value
    }
  })

  let computed = useMemo(() => {
    let descriptors = Object.getOwnPropertyDescriptors(state)

    for (let key in descriptors) {
      let descriptor = descriptors[key]
      if (descriptor.set) {
        descriptor.set = value => setter(key, value)
      }
    }

    return Object.defineProperties({}, descriptors) as S
  }, deps)

  return computed
}
