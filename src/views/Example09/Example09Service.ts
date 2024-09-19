import type { ResultVO, User } from '@/datasource/Types'
import { useFetch } from '@/fetch'
import router from '@/router'
import { useExample09Store } from './Example09Store'
import * as consty from '@/datasource/Const'
export async function usePost<T>(url: string, data: unknown) {
  const resp = useFetch(url, { immediate: false }).post(data).json<ResultVO<T>>()
  await resp.execute(true)
  return resp
}

export const loginGuardService = async (user: { number: string; password: string }) => {
  const resp = await usePost<{ user: User }>('login-guard', user)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const role = resp.response.value?.headers.get('role')
  role && sessionStorage.setItem('role', role)
  const userS = useExample09Store().userS
  resp.data.value?.data.user && (userS.value = resp.data.value?.data.user)
  let path = '/example09/login'
  switch (role) {
    case consty.USER:
      path = '/example09/user'
      break
    case consty.ADMIN:
      path = '/example09/admin'
      break
  }
  router.push(path)
}
