export const isArray = Array.isArray

export const isFunction = (input: any): input is Function => typeof input === 'function'

export const isObject = (input: any): input is Object => {
  if (typeof input !== 'object' || input === null) return false

  let proto = input
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(input) === proto
}

export const isThenable = (input: any): input is PromiseLike<any> =>
  !!(input && typeof input.then === 'function')
