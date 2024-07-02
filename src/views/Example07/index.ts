import { type Course } from '@/datasource/Types'
import { defineAsyncComponent, h, render } from 'vue'

export const createDelDialog = (course: Course) => {
  const node = h(
    defineAsyncComponent(() => import('./DelDialog.vue')),
    { course } // // 将 course 作为 props 传递给 DelDialog.vue 组件
  )
  render(node, document.body)
}
