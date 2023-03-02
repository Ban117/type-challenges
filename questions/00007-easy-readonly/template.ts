type MyReadonly<T extends object> = {
  readonly [t in keyof T]: T[t]
}
