import { ref } from 'vue'
import type { Course } from '@/datasource/Types'
import { listCoursesMock, addCourseMock } from './smalltask01Mock'
/*
不用service业务逻辑了，直接store处理mock的数据然后实现增加/显示课程的函数
*/

const coursesS = ref<Course[]>([])

const fetchCourses = async (): Promise<Course[]> => {
  if (coursesS.value.length === 0) {
    coursesS.value = [...(await listCoursesMock())]
  }
  return coursesS.value
}

const addCourse = async (newCourse: Course): Promise<Course[]> => {
  coursesS.value = [...(await addCourseMock(newCourse))]
  return coursesS.value
}

const store = { coursesS, fetchCourses, addCourse }

export const usesmalltask01Store = () => {
  return store
}
