import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }

// *** Tests ***
type T1 = DeepReadonly<X1>
//    ^?

type T2 = DeepReadonly<X2>
//    ^?


// *** Solution ***

// type DeepReadonly<T> =
//   { readonly [K in keyof T]: DeepReadonly<T[K]> }

type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> }



// *** Lessons ***
// https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for

// 1. `keyof primitive` doesn't extend never
type KeyofPrimativeDoesntExtendNever = keyof string extends never ? true : false // false
type PrimitivesHaveManyKeys = keyof string

// 2. Mapped types skip primitives and just return their input
type MappedTypesSkipPrimitives<T> = {
  [K in keyof T]: 'mappy'
}
type TestMappedPrimitive = MappedTypesSkipPrimitives<string> // returns string! Not some object type!



// ! Bad "Solution"
// The below is wrong! `keyof <some primative> extends never` is false.
// `keyof primative` doesn’t extend `never`.
type _DeepReadonly<T> =
  keyof T extends never
    ? T // T isn't enumerable, so it's a primitive <- this is not true!
    : { readonly [x in keyof T]: DeepReadonly<T[x]> }
