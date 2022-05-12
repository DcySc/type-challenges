type Mutable<T extends object> = {
    - readonly [k in keyof T]: T[k]
}