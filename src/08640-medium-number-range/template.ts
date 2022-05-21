type NumberRange<
    L extends number, 
    H extends number,
    A extends unknown[] = [],
    Res extends unknown = never,
    isRange extends boolean = false
> = A['length'] extends L
    ? NumberRange<L, H, [...A, 1], Res | L, true>
    : A['length'] extends H
        ? Res | H
        : isRange extends true
            ? NumberRange<L, H, [...A, 1], Res | A['length'], isRange>
            : NumberRange<L, H, [...A, 1], Res, isRange>