type BEM<B extends string, E extends string[], M extends string[]> =
  M[number] | E[number] extends E[number]
    ? `${B}__${E[number]}` // e only case
    : M[number] | E[number] extends M[number]
      ? `${B}--${M[number]}` // m only case
      : `${B}__${E[number]}--${M[number]}`// both
