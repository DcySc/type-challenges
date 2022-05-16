type Fibonacci<
    T extends number,
    A extends any[] = [[never], [never]]
> = T extends 1 | 2
    ? 1
    : T extends A['length']
        ? A[0]['length']
        : Fibonacci<T, [[...A[0], ...A[1]], ...A]>;