type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  newT extends unknown[] = [],
  useN extends boolean = false,
  L extends number = T['length'],
> = Start extends End
    ? T
    : newT extends L
        ? newT
        : T extends [infer F, ...infer R]
            ? useN extends false
                ? newT['length'] extends Start
                    ? Fill<T, N, Start, End, newT, true, L>
                    : Fill<R, N, Start, End, [...newT, F], useN, L>
                : newT['length'] extends End
                    ? Fill<T, N, Start, End, newT, false, L>
                    : Fill<R, N, Start, End, [...newT, N], useN, L>
            : newT