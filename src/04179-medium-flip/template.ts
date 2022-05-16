type Flip<T extends Record<any, any>> = {
    [k in keyof T as `${T[k]}`]: k
}