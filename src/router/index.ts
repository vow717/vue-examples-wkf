import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import * as consty from '@/datasource/Const'
import { createAlertDialog } from '@/components/message'
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
    path: '/example05/01',
    component: () => import('@/views/Example05/example01View.vue')
  },
  {
    path: '/example05/02',
    component: () => import('@/views/Example05/example02View.vue')
  },
  {
    path: '/example06/01',
    component: () => import('@/views/Example06/example01View.vue')
  },
  {
    path: '/example06/02',
    component: () => import('@/views/Example06/example02View.vue')
  },
  {
    path: '/example06/03',
    component: () => import('@/views/Example06/example03View.vue')
  },
  {
    path: '/example06/04',
    component: () => import('@/views/Example06/example04View.vue')
  },
  {
    path: '/example07/01',
    component: () => import('@/views/Example07/example01View.vue')
  },
  {
    path: '/example08/01',
    component: () => import('@/views/Example08/example01View.vue')
  },
  {
    path: '/example08/02',
    component: () => import('@/views/Example08/example02View.vue')
  },
  {
    path: '/example08/03',
    component: () => import('@/views/Example08/example03View.vue')
  },
  {
    path: '/example09',
    component: () => import('@/views/Example09/example09View.vue'),
    children: [
      {
        props: true,
        name: 'login-g',
        path: 'login',
        component: () => import('@/views/Example09/GuardLogin.vue')
      },
      {
        props: true,
        path: 'user',
        component: () => import('@/views/Example09/GuardUser.vue'),
        meta: {
          role: consty.USER
        }
      },
      {
        props: true,
        path: 'admin',
        component: () => import('@/views/Example09/GuardAdmin.vue'),
        meta: {
          role: consty.ADMIN
        }
      },
      {
        name: 'nomatch',
        path: ':pathMatch(.*)*', // 如果是全局匹配，应加上`/`，/:pathMatch(.*)*
        redirect: { name: 'login-g' }
      }
    ]
  },
  {
    path: '/experiment02/01',
    component: () => import('@/views/Experiment02/experiment01View.vue')
  },
  {
    path: '/experiment03/home',
    component: () => import('@/views/Experiment03/HomeView.vue'),
    children: [
      {
        path: 'food',
        component: () => import('@/views/Experiment03/FoodView.vue')
      },
      {
        path: 'shop/:id',
        component: () => import('@/views/Experiment03/ShopView.vue')
      },
      {
        path: 'location',
        component: () => import('@/views/Experiment03/NotFinished/LocationView.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/Experiment03/OrderView.vue')
      },
      {
        path: 'running',
        component: () => import('@/views/Experiment03/NotFinished/RunningView.vue')
      }
    ]
  },
  {
    path: '/experiment04/04',
    component: () => import('@/views/Experiment04/Experiment04View.vue')
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
    path: '/homework05/01',
    component: () => import('@/views/HomeWork05/homework01View.vue')
  },
  {
    path: '/task01/01',
    component: () => import('@/views/SmallTask01/smalltask01View.vue')
  },
  {
    path: '/task02/01',
    component: () => import('@/views/SmallTask02/smalltask01View.vue')
  },
  {
    path: '/task03/01',
    component: () => import('@/views/SmallTask03/smalltask01View.vue')
  },
  {
    path: '/task04/01',
    component: () => import('@/views/SmallTask04/smalltask01View.vue')
  },
  {
    path: '/task05/01',
    component: () => import('@/views/SmallTask05/smalltask01View.vue')
  },
  {
    path: '/task06/01',
    component: () => import('@/views/SmallTask06/smalltask01View.vue')
  },
  {
    path: '/task07/01',
    component: () => import('@/views/SmallTask07/smalltask01View.vue')
  },
  {
    path: '/task08/01',
    component: () => import('@/views/SmallTask08/xlsxView.vue')
  },

  {
    path: '/',
    component: () => import('@/views/HelloWorld.vue')
  }
]

const router = createRouter({
  // HTML5 Mode。createWebHistory()函数，生产环境下需要web容器完成转发
  // createWebHashHistory()函数仍使用#符号，无需配置
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  // 排除，没有声明角色权限的路由
  if (!to.meta.role) {
    return true //返回ture则允许路由
  }

  if (to.meta.role != sessionStorage.getItem('role')) {
    createAlertDialog('无权限')
    // 直接返回路由地址
    // return '/example13/login'
    // 支持返回路由对象
    return { name: 'login-g' }
  }
  return true
})

export default router
