// *** covariance & contravariance ***


type Narrow = 'I\'m a narrow string'

let narrow: Narrow = 'I\'m a narrow string'

let wider: string

// wide -> narrow ✅. This is covariance
wider = narrow

// narrow -> wide ❌. (string is not assignable to "I'm a narrow string")
narrow = wider



// covariance holds for function return types...

type NarrowFunctionReturn = (...args: any) => 'I\'m narrow'

type WiderFunctionReturn = (...args: any) => string

// wide -> narrow ✅
const widerFn: WiderFunctionReturn = (x: string) => 'I\'m narrow'

// narrow -> wide ❌
const narrowFn: NarrowFunctionReturn = (x: string) => 'I should return I\'m narrow'



// ...but covariance doesn't hold for function parameters, this is the only area TypeScript's type system is contravariant
// it's really super intuitive tbh but yeah

function takesNarrowParams(s: 'I\'m narrow'): string {
  return s
}

type TakesWiderParams = (s: string) => string


// wide -> narrow ❌. This is contravariance
const takesWiderParams: TakesWiderParams = takesNarrowParams


