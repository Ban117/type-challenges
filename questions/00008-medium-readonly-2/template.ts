// todo need to fix this as they've added another case since we solved this

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type PickReadonly<T, K extends keyof T> = {
  readonly[key in K]: T[key]
}

// creates a union of 2 object types
type MyIntersection<A, B> = A & B extends infer U
  ? { [P in keyof U]: U[P] }
  : never

type MyReadonly2<T, K extends keyof T = never> =
  Equal<K, never> extends true
    ? Readonly<T>
    : [K] extends [keyof T]
        ? MyIntersection<
          PickReadonly<T, K>,
          MyOmit<T, K>
        >
        : never

// ? Much more elegant version found online
type _MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in MyExclude<keyof T, K>]: T[P]
}
