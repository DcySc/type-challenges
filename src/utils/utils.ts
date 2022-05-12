type MergeAnd<T> = {
    [p in keyof T]: T[p];
}
