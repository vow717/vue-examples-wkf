import type { Course } from '@/datasource/Types'
import { defineAsyncComponent, h, render } from 'vue'

const createModalDialog = (course: Course) => {
  const ModalDialog = defineAsyncComponent(() => import('./ModalComponent.vue'))
  //h把组件变成组件虚拟domVnode
  const vnode = h(ModalDialog, { course })

  render(vnode, document.body)
}

const createModalDialog2 = async () => {
  const ModalDialog2 = defineAsyncComponent(() => import('./ModalComponent2.vue'))
  const vnode = h(ModalDialog2)

  render(vnode, document.body)
}

export { createModalDialog, createModalDialog2 }
