type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K
}