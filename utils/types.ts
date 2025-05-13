export type ValueOf<T> = T[keyof T];

export type ArrayElement<T> = T extends (infer U)[] ? U : never;