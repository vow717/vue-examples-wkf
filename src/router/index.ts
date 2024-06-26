import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/example01/01',
    component: () => import('@/views/Example01/example01View.vue')
  },
  {
    path: '/example01/02',
    component: () => import('@/views/Example01/example02View.vue')
  },
  {
    path: '/example02/01/students/:sid/homeworks/:hid',
    component: () => import('@/views/Example02/example01View.vue')
  },
  {
    path: '/example03/01',
    component: () => import('@/views/Example03/example01View.vue')
  },
  {
    path: '/example03/02',
    component: () => import('@/views/Example03/example02View.vue')
  },
  {
    path: '/example03/03',
    component: () => import('@/views/Example03/example03View.vue')
  },
  {
    path: '/example04/01',
    component: () => import('@/views/Example04/example01View.vue')
  },
  {
    path: '/experiment02/01',
    component: () => import('@/views/Experiment02/experiment01View.vue')
  },
  {
    path: '/homework01/01',
    component: () => import('@/views/HomeWork01/homework01View.vue')
  },
  {
    path: '/homework02/01',
    component: () => import('@/views/HomeWork02/homework01View.vue')
  },
  {
    path: '/',
    component: () => import('@/views/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
