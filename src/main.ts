import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { registerGlobComp } from './components/registerGlobComp'
// import './assets/iconfont/iconfont.js'
import 'virtual:svg-icons-register'

const app = createApp(App)

async function bootstrap() {
  registerGlobComp(app)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

bootstrap()
