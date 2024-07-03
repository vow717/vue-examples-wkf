import { ref } from 'vue'
import type { Course } from '@/datasource/Types'

const coursesS = ref<Course[]>([])

export const usesmalltask01Store = () => {
  return { coursesS }
}
