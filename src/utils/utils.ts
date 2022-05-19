type MergeAnd<T> = {
    [p in keyof T]: T[p];
}

type NumberToArray<A extends number, B extends number[] = []> =
  B['length'] extends A
    ? B
    : NumberToArray<A, [...B, 0]>;

type myIncludes<T extends unknown[], U> = T extends [infer F, ...infer R] ? (F extends U ? true : myIncludes<R, U>) : false

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false