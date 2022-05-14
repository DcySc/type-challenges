type TupleToNestedObject<T extends unknown[], U> = T extends [infer F, ...infer R]
    ? F extends string
        ? R extends []
            ? Record<F, U>
            : Record<F, TupleToNestedObject<R, U>>
        : never
    : U