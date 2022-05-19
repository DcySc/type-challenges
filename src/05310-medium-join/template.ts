type Join<
    T extends unknown[], 
    U extends string | number
> = T extends [infer F, ...infer R]
    ? F extends string 
        ? R['length'] extends 0
            ? F
            : `${F}${U}${Join<R, U>}`
        : never
    : never