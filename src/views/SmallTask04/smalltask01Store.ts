import { ref } from 'vue'
import type { Course } from '@/datasource/Types'
import { listCoursesMock, addCourseMock } from './smalltask01Mock'
/*
不用service业务逻辑了，直接store处理mock的数据然后实现增加/显示课程的函数
*/

const coursesS = ref<Course[]>([])

const fetchCourses = async () => {
  if (coursesS.value.length === 0) {
    coursesS.value = await listCoursesMock()
  }
  return coursesS
}

const addCourse = async (newCourse: Course) => {
  coursesS.value.push(newCourse) // 确保数据添加到响应式 ref 中
  await addCourseMock(newCourse)
  console.log('addCourse - 更新后的 coursesS:', coursesS.value)
  return coursesS
}

const store = { coursesS, fetchCourses, addCourse }

export const usesmalltask01Store = () => {
  return store
}
