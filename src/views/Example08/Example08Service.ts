import type { Course, User } from '@/datasource/Types'
import { useExample08Store } from './Example08Store'
//import { useGet, usePost } from '@/fetch'

// example08-2
export const listCoursesService = async (userId: number) => {
  const { data } = await useGet<{ courses: Course[] }>(`users/${userId}/courses`)
  return data.value?.data.courses ?? []
}

/*

// example08-3
export const loginService = async (user: { number: string; password: string }) => {
  const resp = await usePost<{ user: User }>('login', user)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const userS = useExample11Store().userS
  resp.data.value?.data && (userS.value = resp.data.value?.data.user)
}
// example08-3
export const getHomeService = async () => {
  const resp = await useGet<{ courses: Course[] }>('home')
  useExample11Store().coursesS.value = resp.data.value?.data.courses ?? []
}

*/
