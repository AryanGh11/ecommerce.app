export type GenericNullable<T> = {
  [K in keyof T]: T[K] | null;
};
