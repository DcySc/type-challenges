type Flatten<A extends unknown[]> = A extends [infer F, ...infer R] 
    ? F extends unknown[]
        ? [...Flatten<F>, ...Flatten<R>]
        : [F, ...Flatten<R>]
    : A