type RemoveIndexSignature<T> = {
    [k in keyof T as k extends `${infer R}` ? R : never]: T[k]
}