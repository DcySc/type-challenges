type Space = ' '|'\n'|'\t';
type Trim<S extends string> = S extends `${Space}${infer R}` ? Trim<R> 
  : S extends `${infer L}${Space}` 
    ? Trim<L>
    : S;