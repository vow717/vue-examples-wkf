import { type Course } from '@/datasource/Types'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'
export const useExample06Store = createGlobalState(() => {
  const coursesS = ref<Course[]>()

  return { coursesS }
})
