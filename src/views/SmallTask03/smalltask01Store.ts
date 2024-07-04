import { ref } from 'vue'
import type { Course } from '@/datasource/Types'

const coursesS = ref<Course[]>([])
const store = { coursesS }
export const usesmalltask01Store = () => {
  return store
}
