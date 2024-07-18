import { type ResultVO, type Course } from '@/datasource/Types'
import { useStore } from './Experiment4Store'
import { useFetch } from '@/fetch'
//封装useFetch利于维护
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

export const loginService = async (user: { number: string; password: string }) => {
  const resp = await usePost<{ user: { name: string; title: string; age: string } }>(
    'experiment04/login',
    user
  )
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const userS = useStore().UserS
  resp.data.value?.data && (userS.value = resp.data.value.data.user)

  console.log(userS.value?.name)
}

export const coursesService = async () => {
  const resp = await useGet<{ courses: Course[] }>('experiment04/user/courses')
  useStore().CoursesS.value = resp.data.value?.data.courses ?? []
}
