type MyOmit<T, K extends keyof T> = {
  [key in MyExclude<keyof T, K>]: T[key]
}

