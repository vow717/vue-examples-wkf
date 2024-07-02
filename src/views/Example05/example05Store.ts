import type { User } from '@/datasource/Types'
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'
export const useExample05Store = createGlobalState(() => {
  const countS = ref(0)
  const increment = () => countS.value++
  const userS = ref<User>({ name: 'wkf', address: '717', level: 1 })
  const doubleCountG = computed(() => countS.value * 2)
  const premissionG = computed(() => (level: number) => userS?.value.level == level)
  return {
    countS,
    increment,
    userS,
    doubleCountG,
    premissionG
  }
})
