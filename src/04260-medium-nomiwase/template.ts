type AllCombinations<
    S extends string,
    U extends string = ''
> = S extends U 
    ? U
    : S extends `${U}${infer F}${infer R}`
        ? '' | R | AllCombinations<S, `${U}${F}`> | `${F}${AllCombinations<`${U}${R}`>}`
        : ''