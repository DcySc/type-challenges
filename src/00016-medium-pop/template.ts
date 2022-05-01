// Pop
type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : never;

// Shift
type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : never;