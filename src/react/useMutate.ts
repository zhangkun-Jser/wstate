import { useRef, useLayoutEffect, useCallback } from 'react'
import { mutate } from '../createWstate'

export default function useMutate<T extends (...args) => any>(callback: T) {
  let callbackRef = useRef(callback)
  let update = useCallback(
    ((...args) => {
      return mutate(() => callbackRef.current(...args))
    }) as T,
    [callbackRef]
  )

  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return update
}
