import type { App } from 'vue'
import SvgIcon from './SvgIcon'

const compList = [SvgIcon]

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.use(comp)
  })
}
