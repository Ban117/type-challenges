// ! can just use `PromiseLike`
// type Thenable = {
//   then: (onfulfilled: (arg: any) => any) => any
// }

// this is quite different to `Awaited<T>` so probably not super robust, but it beats the challenge
type MyAwaited<T extends PromiseLike<any>> =
    T extends Promise<infer V>
      ? V extends Promise<any>
        ? MyAwaited<V>
        : V
      : T extends PromiseLike<infer F>
        ? F
        : never
