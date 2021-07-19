import { FC } from 'react'
import { isWstate } from '../createWstate'
import useWstate from './useWstate'

let currentProps = null

export default function view<F extends FC>(factory: F): F {
  let Component = props => {
    try {
      currentProps = props
      return factory(props)
    } finally {
      currentProps = null
    }
  }

  return Component as F
}

export const useAttrs = <T extends object>(initValue: T): T => {
  if (!currentProps) {
    throw new Error(`you may forgot to wrap function-component by view(f)`)
  }

  let state = useWstate(initValue)

  return mergeWstate(state, currentProps) as T
}

export const useAttr = <T extends object>(name: string, initValue: T): T => {
  let state = useAttrs({ [name]: initValue })
  return state[name]
}

const mergeWstate = <T extends object, S extends T>(target: T, source: S): T => {
  let result = {} as T

  for (let key in target) {
    let value = target[key]

    result[key] = value

    if (!isWstate(value)) continue

    let sourceValue = source[key]

    if (!isWstate(sourceValue)) continue

    result[key] = sourceValue
  }

  return result
}
