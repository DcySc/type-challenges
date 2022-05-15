type FlattenDepth<T extends unknown[], N extends number = 1, A extends number[] = []> = A['length'] extends N
    ? T
    : T extends [infer F, ...infer R]
        ? F extends unknown[]
            ? [
                ...FlattenDepth<F, N, [1, ...A]>,
                ...FlattenDepth<R, N, A>,
            ]
            : [F, ...FlattenDepth<R, N, A>]
        : []