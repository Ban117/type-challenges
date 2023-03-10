type DeepReadonly<T> =
  keyof T extends never
    ? T // T isn't enumerable, so it's a primative
    : { readonly [x in keyof T]: DeepReadonly<T[x]> }
