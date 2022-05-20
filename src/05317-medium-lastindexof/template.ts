type LastIndexOf<
    T extends unknown[], 
    U
> = T['length'] extends 0
    ? -1
    : T extends [...infer R, infer Last]
        ? Equal<U, Last> extends true
            ? R['length']
            : LastIndexOf<R, U>
        : -1