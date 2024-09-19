import type { Course, User } from '@/datasource/Types'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

const coursesS = ref<Course[]>([])
const userS = ref<User>({ name: 'BO', address: '925', level: 1 })

const store = {
  coursesS,
  userS
}

export const useExample08Store = createGlobalState(() => {
  return store
})
