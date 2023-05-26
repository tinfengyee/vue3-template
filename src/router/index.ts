import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import Layout from '@/layout/index.vue'

const base: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  }
]

const add: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    redirect: '/demo/list',
    children: [
      {
        path: 'list',
        name: 'DemoList',
        component: () => import('@/views/demo/index.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...base, ...add] as unknown as RouteRecordRaw[]
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
