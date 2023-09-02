// type Action<P = [], R = void> = P extends any[] ? (...args: P) => R : never
export type AsyncAction<P = [], R = void> = P extends any[]
  ? (...args: P) => Promise<R>
  : never
