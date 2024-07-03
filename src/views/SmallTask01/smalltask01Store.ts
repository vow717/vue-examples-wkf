import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
interface Teacher {
  name: string
  age: number
}

export const usesmalltask01Store = createGlobalState(() => {
  const teacherGlobal = ref<Teacher>({ name: 'BO', age: 30 })
  const upAge = () => teacherGlobal.value.age++
  const downAge = () => teacherGlobal.value.age--
  return {
    teacherGlobal,
    upAge,
    downAge
  }
})
