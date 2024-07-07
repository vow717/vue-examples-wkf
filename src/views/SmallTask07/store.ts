import type { Teacher, Course } from '@/datasource/Types'
import { ref } from 'vue'

const teachers: Teacher[] = [
  { id: 'teacher1', name: '张锡英', departmentId: '1', age: '30' },
  { id: 'teacher2', name: '王波', departmentId: '1', age: '30' },
  { id: 'teacher3', name: '李莉', departmentId: '2', age: '30' },
  { id: 'teacher4', name: '边继龙', departmentId: '2', age: '30' },
  { id: 'teacher5', name: '单颖', departmentId: '3', age: '30' },
  { id: 'teacher6', name: '谷志新', departmentId: '3', age: '30' }
]

const courses: Course[] = [
  { id: 1432, name: 'C语言程序设计', createTime: '2022/9' },
  { id: 2231, name: 'Java程序设计', createTime: '2024/3' },
  { id: 5323, name: 'Python', createTime: '2023/9' },
  { id: 4135, name: 'Web开发技术', createTime: '2024/3' }
]

const CoursesR = ref<Course[]>([])
const TeachersR = ref<Teacher[]>([])

const listCoursesStore = async (): Promise<Course[]> => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      CoursesR.value = courses
      resolve(CoursesR.value)
    }, 3000)
  })
}

const listTeachersStore = async (): Promise<Teacher[]> => {
  return new Promise<Teacher[]>((resolve) => {
    setTimeout(() => {
      TeachersR.value = teachers
      resolve(TeachersR.value)
    }, 2000)
  })
}

const store = { listCoursesStore, listTeachersStore }
export const useStore = () => {
  return store
}
