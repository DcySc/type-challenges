type GreaterThan<T extends number, U extends number> = NumberToArray<T> extends [...NumberToArray<U>, ...infer Other]
    ? Other extends []
        ? false
        : true
    : false