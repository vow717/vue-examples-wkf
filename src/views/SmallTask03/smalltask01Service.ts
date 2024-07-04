import type { Course } from '@/datasource/Types'
import { usesmalltask01Store } from './smalltask01Store'
import { addCourseMock, listCoursesMock } from './smalltask01Mock'

export const listCoursesService = async (): Promise<Course[]> => {
  const { coursesS } = usesmalltask01Store()
  /*
  这个没用了，添加业务出来后不能简单通过length判断是否加载过
  if (coursesS.value.length > 0) {
    return coursesS.value
  }
    */
  const courses = await listCoursesMock()
  console.log('listCoursesService - 更新后的 coursesS:', coursesS.value)
  coursesS.value = courses
  return courses
}

export const addCourseService = async (newCourse: Course): Promise<Course[]> => {
  const { coursesS } = usesmalltask01Store()
  const updateCourses = await addCourseMock(newCourse)
  coursesS.value = updateCourses
  console.log('addCourseService - 更新后的 coursesS:', coursesS.value)
  return updateCourses
}
