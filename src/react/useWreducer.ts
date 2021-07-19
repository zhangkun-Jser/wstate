import useWstate from './useWstate'
import useMutate from './useMutate'

type Wreducer2Dispatch<R> = R extends (S: any, action: infer Action) => infer Result
  ? (action: Action) => Result
  : never

type UseWreducerReturn<T, R> = [T, Wreducer2Dispatch<R>]

type Wreducer<T> = (S: T, action: any) => any

export default function useWreducer<T extends object, R extends Wreducer<T>>(
  reducer: R,
  initialState: T
): UseWreducerReturn<T, R> {
  let state = useWstate(initialState)
  let dispatch = useMutate((action => reducer(state, action)) as Wreducer2Dispatch<R>)

  return [state, dispatch]
}
