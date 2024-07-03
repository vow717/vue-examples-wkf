import type { Course } from '@/datasource/Types'
import { usesmalltask01Store } from './smalltask01Store'

const courses: Course[] = [
  { id: 1, name: '计算机组成原理', createTime: '2024/9' },
  { id: 2, name: '计算机网络', createTime: '2024/9' },
  { id: 3, name: 'Java开发技术', createTime: '2023/9' },
  { id: 4, name: 'Web开发技术', createTime: '2024/3' }
]

export const listCoursesService = async (): Promise<Course[]> => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      // // 异步操作完成后，调用 resolve() 表示 Promise 成功
      usesmalltask01Store().coursesS.value = courses
      resolve(courses)
    }, 1000)
  })
}
