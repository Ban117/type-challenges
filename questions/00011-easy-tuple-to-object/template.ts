type TupleToObject<T extends readonly PropertyKey[]> = {
  [value in T[number]]: value
}
