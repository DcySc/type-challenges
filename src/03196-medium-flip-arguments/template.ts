type FlipArguments<T> = T extends (...args: infer ARGS) => infer R
    ? (...args: Reverse<ARGS>) => R
    : T