type Chunk<
    T extends unknown[], 
    N extends number = 1,
    A extends unknown[] = [],
    Result extends unknown[] = [],
> = T extends [infer F, ...infer R]
    ? A['length'] extends N 
        ? Chunk<R, N, [F], [...Result, A]>
        : Chunk<R, N, [...A, F], Result>
    : A['length'] extends 0
        ? [...Result]
        : [...Result, A]