import { ref } from 'vue'

interface Teacher {
  name: string
  age: number
}

const teacherGlobal = ref<Teacher>({ name: 'BO', age: 30 })
const upAge = () => teacherGlobal.value.age++
const downAge = () => teacherGlobal.value.age--

const store = {
  teacherGlobal,
  upAge,
  downAge
}
export const usesmalltask01Store = () => {
  return store
}
