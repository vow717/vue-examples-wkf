import type { Course } from '@/datasource/Types'
import { ref } from 'vue'

const courses: Course[] = [
  { id: 1432, name: 'C语言程序设计', createTime: '2022/9' },
  { id: 2231, name: 'Java程序设计', createTime: '2024/3' },
  { id: 5323, name: 'Python', createTime: '2023/9' },
  { id: 4135, name: 'Web开发技术', createTime: '2024/3' }
]
const CoursesR = ref<Course[]>([])

const listCoursesStore = async (): Promise<Course[]> => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      CoursesR.value = courses
      resolve(CoursesR.value)
    }, 3000)
  })
}

const store = { listCoursesStore }
export const useStore = () => {
  return store
}
