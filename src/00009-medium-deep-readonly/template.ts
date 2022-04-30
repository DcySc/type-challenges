type Diff = string | boolean | number | bigint | symbol | null | undefined | Function

type DeepReadonly<T> = T extends Diff ? T : {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}