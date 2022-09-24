



/**
 * 父标签类型
 */
export type TreeTag = {
  text: string,
  children: Array<Tag>
}

/**
 * 子标签类型
 */
export type Tag = {
  text: string,
  id: string
}