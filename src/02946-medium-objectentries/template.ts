type ObjectEntries<T  extends Record<string, any>> = {
    [K in keyof T]- ?: [K, T[K] extends infer R | undefined ? R : T[K]]
}[keyof T]