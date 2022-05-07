type DeepReadonlyDiff = string | boolean | number | bigint | symbol | null | undefined | Function

type DeepReadonly<T> = T extends DeepReadonlyDiff ? T : {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}