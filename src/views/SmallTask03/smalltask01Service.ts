import type { Course } from '@/datasource/Types'
import { usesmalltask01Store } from './smalltask01Store'
import { listCoursesMock } from './smalltask01Mock'

export const listCoursesService = async (): Promise<Course[]> => {
  const { coursesS } = usesmalltask01Store()
  if (coursesS.value.length > 0) {
    return coursesS.value
  }
  const courses = await listCoursesMock()
  coursesS.value = courses
  return courses
}
