function always (t) {
  return t;
}

function merge (b) {
  return a => Object.assign({}, a, b);
}

function toFnWithArg (target, arg) {
  return typeof target === 'function' ? target(arg) : always(target);
}

export interface PatchFn<T> {
  (t: T): T
}

export type MutorInstance<T> =
  {
    merge: (t: T) => PatchFn<Partial<T>>
  } &
  {
    [k in keyof T]: {
    (x: T[k]): PatchFn<T>
    (f: PatchFn<T[k]>): PatchFn<T>
  }};
``
export function Mutor<T> (keys: (keyof T)[]): MutorInstance<T> {
  const reducer = (o, k) => {
    o[k] = (a) => (t) => merge(t)({ [k]: toFnWithArg(a, t[k]) });
    return o;
  };
  return Object.assign(keys.reduce(reducer, {}), { merge });
}

export function pipe (...fns) {
  return function (t) {
    return fns.reduce((pr, f) => f(pr), t);
  };
}