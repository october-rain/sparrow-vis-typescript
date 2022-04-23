export function identity(x: any) {
  return x;
}

export function compose(fn: Function, rest: Function[]) {
  return rest.reduce((total, cur) => (x: any) => cur(total(x)), fn) as any;
}

// export function compose(...funcs: any[]) {
//   return funcs.reduce(
//     (a, b) => (...args: any) => a(b(...args)),
// }
