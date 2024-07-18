import { type ResultVO, type Course, type User } from '@/datasource/Types'
import { useExample08Store } from './Example08Store'
import { useFetch } from '@/fetch'

export async function useGet<T>(url: string) {
  const resp = useFetch(url, { immediate: false }).get().json<ResultVO<T>>()
  await resp.execute(true)
  return resp
}

export async function usePost<T>(url: string, data: unknown) {
  const resp = useFetch(url, { immediate: false }).post(data).json<ResultVO<T>>()
  await resp.execute(true)
  return resp
}

export const listCoursesService = async (userId: number) => {
  const { data } = await useGet<{ courses: Course[] }>(`api/users/${userId}/courses`)
  return data.value?.data.courses ?? []
}

export const loginService = async (user: { number: string; password: string }) => {
  const resp = await usePost<{ user: User }>('login', user)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const userS = useExample08Store().userS
  resp.data.value?.data && (userS.value = resp.data.value?.data.user)
}

export const getHomeService = async () => {
  const resp = await useGet<{ courses: Course[] }>('home')
  useExample08Store().coursesS.value = resp.data.value?.data.courses ?? []
}
