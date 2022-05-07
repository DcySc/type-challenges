type notAnyType = false|''| 0| [] | Record<string,never> | null | undefined
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R] 
    ? F extends notAnyType
        ? AnyOf<R>
        : true
    : false