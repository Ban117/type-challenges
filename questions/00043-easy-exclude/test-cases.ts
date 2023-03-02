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
