type Trunc<N extends number | string> = N extends number
    ? `${N}` extends `${infer L}.${any}`
        ? L 
        : `${N}`
    : N extends `${infer L}.${any}`
        ? L
        : N