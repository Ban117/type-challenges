import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

// -----------------------------------

// ! This uses the distributive property of union types and conditionals
type G = MyExclude<'a' | 'b' | 'c', 'a'>

type GExplicit =
  MyExclude<'a', 'a'>
  | MyExclude<'b', 'a'>
  | MyExclude<'c', 'a'>

type GExtraExplicit =
  ('a' extends 'a' ? never : 'a')
  | ('b' extends 'a' ? never : 'b')
  | ('c' extends 'a' ? never : 'c')

type DistributiveGenericConditional1<T> = T extends string ? `1${T}` : 'not a string'
type DistributiveGenericConditional1b<T> = T extends string ? `1${T}` : never

type T1 = DistributiveGenericConditional1<'he' | 'll' | 'oo' | 42>

type T2 = DistributiveGenericConditional1b<'he' | 'll' | 'oo' | 42>
// 42 becomes never, anything | never => anything

type DistributiveGenericConditional2<T, K> = T & K extends string ? `2${T} - 2${K}` : never

type T3 = DistributiveGenericConditional2<'he' | 'll' | 'oo', 'what' | 'is' | 'up'>

// *** Escaping Distributivity ***

type EscapeDist<T> = [T] extends [any] ? 'once' : 'nope'
type NoEscapeDist<T> = T extends any ? 'twice' : 'nope'

type TT1 = EscapeDist<'he' | 'llo'>
type TT2 = NoEscapeDist<'he' | 'llo'>
