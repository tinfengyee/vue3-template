import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import HomeView from '../views/AboutView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
