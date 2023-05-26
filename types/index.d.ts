/**
 * 接口数据响应类型
 */
declare interface IResponse<P = Record<string, unknown>> {
  code: number
  msg: string
  data: P
}

/**
 * ref 绑定的元素类型
 */
declare type ElementRefType = HTMLElement | null

/**
 * 允许null的泛型
 */
declare type NullAble<T> = T | null

/**
 * 普通的对象的泛型
 */
declare interface IObject<T> {
  [index: string]: T
}

/**
 * 普通的对象的泛型
 */
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
