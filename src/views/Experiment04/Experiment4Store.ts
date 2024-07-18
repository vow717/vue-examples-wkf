import { ref } from 'vue'
import type { Course } from '@/datasource/Types'

const CoursesS = ref<Course[]>([])
const UserS = ref<{ name: string; title: string; age: string }>()

const store = { UserS, CoursesS }

export const useStore = () => {
  return store
}
