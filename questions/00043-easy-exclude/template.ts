/**
 * Exclude from T those types that are assignable to U
 */
// ? I don't love that in the usage U can be anything, can't we find a
// ? way to ensure U is a subset of T?
// ? apparently not because of the function case?
// type MyExclude<T, U> = T extends U ? never : T

type MyExclude<T, U> = T extends U ? never : T
