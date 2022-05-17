type MergeAnd<T> = {
    [p in keyof T]: T[p];
}

type NumberToArray<A extends number, B extends number[] = []> =
  B['length'] extends A
    ? B
    : NumberToArray<A, [...B, 0]>;