import type { ResultVO } from '@/datasource/Types'
import { createFetch } from '@vueuse/core'
//请求/响应拦截器，即在请求发出前/响应返回后，先进入拦截器执行统一处理

export const useFetch = createFetch({
  baseUrl: '/api',
  options: {
    beforeFetch: ({ options }) => {
      //从sessionStorage中取值
      const token = sessionStorage.getItem('token')
      if (token) {
        options.headers = {
          ...options.headers,
          token: token
        }
      }
      return { options }
    },
    afterFetch: (ctx) => {
      const data: ResultVO<{}> = ctx.data
      if (data.code != 200) {
        return Promise.reject(data.message)
      }
      return ctx
    },
    onFetchError: (ctx) => {
      return Promise.reject(ctx.error)
    }
  }
})
