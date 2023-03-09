import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

type T1 = BEM<'btn', ['price'], []>
//    ^?

type T2 = BEM<'btn', ['price'], ['warning', 'success']>
//    ^?

type T3 = BEM<'btn', [], ['small', 'medium', 'large']>
//    ^?

type BEM<B extends string, E extends string[], M extends string[]> =
  M[number] | E[number] extends E[number]
    ? `${B}__${E[number]}` // e only case
    : M[number] | E[number] extends M[number]
      ? `${B}--${M[number]}` // m only case
      : `${B}__${E[number]}--${M[number]}`// both
