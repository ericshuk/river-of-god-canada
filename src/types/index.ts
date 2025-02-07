/** Ensures proper type checking of properties to omit. */
export type StrictOmit<T, K extends keyof T> = Omit<T, K>;
