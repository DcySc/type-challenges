type PercentageParser<T extends string, A extends any[] = ['', '', '']> = T extends `${infer L}${infer R}`
    ? L extends '+' | '-'
        ? PercentageParser<R, [L, A[1], A[2]]>
        : L extends '%'
            ? [A[0], A[1], L]
            : PercentageParser<R, [A[0], `${A[1]}${L}`, A[2]]>
    : A