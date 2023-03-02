type MyPick<T extends object, K extends keyof T> = {
  [k in K]: T[k]
}

type MyPickWorse<T extends {}, K extends keyof T> = {
  [k in K]: T[k]
}
