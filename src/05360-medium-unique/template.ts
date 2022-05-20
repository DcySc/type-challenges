type Unique<
    T extends any[], 
    A extends any[] = []
> = T extends [infer F, ...infer R]
    ? Includes<A, F> extends true
        ? Unique<R, A>
        : Unique<R, [...A, F]>
    : A