import { useState, useMemo } from 'react'

const useUpdate = () => {
  let [_, setState] = useState(0)
  let update = useMemo(() => {
    return () => setState(count => count + 1)
  }, [])
  return update
}

export default useUpdate
