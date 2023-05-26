import mitt, { type Emitter } from 'mitt'

// 定义事件和事件对应的类型
type MittEvent = {
  // 事件 foo 的参数为 string 类型
  foo: string
  resize: {
    detail: {
      width: number
      height: number
    }
  }
}

const emitter: Emitter<MittEvent> = mitt<MittEvent>()

export default emitter
