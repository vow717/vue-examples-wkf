import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
const courses = ref<Course[]>([
  { id: 1, name: '计算机组成原理', createTime: '2024/9' },
  { id: 2, name: '计算机网络', createTime: '2024/9' },
  { id: 3, name: 'Java开发技术', createTime: '2023/9' },
  { id: 4, name: 'Web开发技术', createTime: '2024/3' }
])

export const listCoursesMock = async (): Promise<Course[]> => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      resolve(courses.value)
    }, 1000)
  })
}

export const addCourseMock = async (newCourse: Course): Promise<Course[]> => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      courses.value.push(newCourse)
      resolve(courses.value)
    }, 1000)
  })
}
