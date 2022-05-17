type Zip<
    T extends unknown[], 
    U extends unknown[],
    R extends unknown[] = []
> = T extends [infer F1, ...infer R1]
    ? U extends [infer F2, ...infer R2]
        ? Zip<R1, R2, [...R, [F1, F2]]>
        : R
    : R