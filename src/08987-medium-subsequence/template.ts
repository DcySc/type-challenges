type Subsequence<T extends number[], A extends number[] = []> = T extends [
    infer L,
    ...infer R
]
    ? Subsequence<
        R extends number[] ? R : [],
        A | [...A, ...(L extends number ? [L] : [])]
      >
    : A