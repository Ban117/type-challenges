type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k]
} & Omit<T, K>
