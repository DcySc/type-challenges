type LengthOfString<S extends string, A extends unknown[] = []> = S extends `${infer F}${infer R}`
    ? LengthOfString<R, [F, ...A]>
    : A['length']