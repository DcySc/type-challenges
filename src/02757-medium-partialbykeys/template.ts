type PartialByKeys<T, K extends keyof T | 'unknown' = keyof T> = MergeAnd<{
    [k in Exclude<keyof T, K>]: T[k]
} & {
    [k in keyof T as k extends K ? k : never]?: T[k]
}>