import { listCourses } from '@/datasource/Types'
import { useExample06Store } from './useExample06Store'
//函数
export const listCoursesService = () => {
  const coursesS = useExample06Store().coursesS
  setTimeout(() => (coursesS.value = listCourses()), 1000)
}
