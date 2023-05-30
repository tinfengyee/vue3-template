import type { App } from 'vue'
import SvgIcon from './SvgIcon'

const compList = [SvgIcon]

// 全局组件注册
export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.use(comp)
  })
}
