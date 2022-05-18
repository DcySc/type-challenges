type Without<
    T extends unknown[], 
    U extends number | unknown[],
    Res extends unknown[] = []
> = T extends [infer F, ...infer R]
    ? U extends unknown[]
        ? myIncludes<U, F> extends true
            ? Without<R, U, Res>
            : Without<R, U, [...Res, F]>
        : F extends U
            ? Without<R, U, Res>
            : Without<R, U, [...Res, F]>
    : Res