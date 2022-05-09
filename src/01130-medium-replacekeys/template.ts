type ReplaceKeys<U, K, O extends Record<string,unknown>> = {
    [key in keyof U]: key extends K
        ? (key extends keyof O
            ? O[key]
            : never)
        : U[key]
}