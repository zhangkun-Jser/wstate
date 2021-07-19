import { useRef, useLayoutEffect, useCallback } from 'react'

export default function useStaticFunction<T extends (...args) => any>(callback: T) {
  let callbackRef = useRef(callback)
  let staticFunction = useCallback(((...args) => callbackRef.current(...args)) as T, [callbackRef])

  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return staticFunction
}
