

export type Resp<T> = {
  data: T,
  code: number,
  description: string,
  message: string,
}
