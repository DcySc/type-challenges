type MapTypes<
    T extends object, 
    R extends Record<'mapFrom' | 'mapTo', any>
> = {
    [k in keyof T]: T[k] extends R['mapFrom']
        ? R extends { mapFrom: T[k] }
            ? R['mapTo']
            : never
        : T[k]
}