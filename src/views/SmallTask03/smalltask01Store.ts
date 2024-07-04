import { ref } from 'vue'
import type { Course } from '@/datasource/Types'
/*
组件直接与服务层交互，服务层负责所有的数据获取和更新逻辑。

优点:
简单直接：组件直接调用服务，代码清晰简单。
减少依赖：组件与服务层紧密耦合，减少了额外的依赖。
缺点:
重复请求：如果多个组件需要相同的数据，每个组件可能会单独发起请求，导致重复请求。
※状态管理混乱：难以在应用中管理全局状态和共享数据。
*/

const coursesS = ref<Course[]>([])
const store = { coursesS }
export const usesmalltask01Store = () => {
  return store
}
