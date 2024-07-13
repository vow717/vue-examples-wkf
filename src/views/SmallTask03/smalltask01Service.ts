import type { Course } from '@/datasource/Types'
import { usesmalltask01Store } from './smalltask01Store'
import { addCourseMock, listCoursesMock } from './smalltask01Mock'

const { coursesS } = usesmalltask01Store()
export const listCoursesService = async () => {
  /*
  这个没用了，添加业务出来后不能简单通过length判断是否加载过
  if (coursesS.value.length > 0) {
    return coursesS.value
  }
    */
  coursesS.value = await listCoursesMock()
  return coursesS
}

export const addCourseService = async (newCourse: Course) => {
  const courses = await addCourseMock(newCourse)
  coursesS.value = courses
  console.log('addCourseService - 更新后的 coursesS:', coursesS.value)
  return coursesS
}
