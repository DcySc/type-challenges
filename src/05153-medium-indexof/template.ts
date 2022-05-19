type IndexOf<
    T extends unknown[], 
    U, 
    A extends unknown[] = [],
    L extends number = T['length']
> = A['length'] extends L
    ? -1
    : T extends [infer F, ...infer R]
        ? Equal<U,F> extends true
            ? A['length']
            : IndexOf<R, U, [...A, F], L>
        : -1