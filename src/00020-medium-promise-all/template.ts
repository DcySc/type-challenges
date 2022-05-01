// ?????
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [R in keyof T]: T[R] extends Promise<infer S> ? S : T[R]
}>