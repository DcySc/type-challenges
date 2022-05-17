type IsTuple<T> = [T] extends [never]
    ? false
    : T extends [] 
        ? true
        : T extends Readonly<[infer F, ...infer Rest]>
            ? true
            : false