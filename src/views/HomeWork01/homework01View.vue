<script setup lang="ts">
import { ref, type Component, computed, defineAsyncComponent } from 'vue'
const nowChooseR = ref(0)
const ChooseR: { name: string; component: Component }[] = [
  {
    name: '添加用户',
    component: defineAsyncComponent(() => import('./AddUser.vue'))
  },
  {
    name: '删除用户',
    component: defineAsyncComponent(() => import('./DelUser.vue'))
  },
  {
    name: '更新用户',
    component: defineAsyncComponent(() => import('./UpdateUser.vue'))
  }
]

const nowComponentR = computed(() => ChooseR[nowChooseR.value].component)

//Vue 的计算属性 computed 会自动侦听其依赖的响应式数据（例如 nowChooseR.value），当依赖数据发生变化时，计算属性会重新计算其值。这意味着无需手动触发更新，界面上相关的颜色会在 nowChooseR.value 改变时自动更新。
const getColor = computed(() => {
  return (index: number): string => {
    return index === nowChooseR.value ? 'red' : 'black'
  }
})
</script>
<template>
  <p>
    <span
      v-for="(c, index) of ChooseR"
      :key="index"
      :style="{ margin: '5px', cursor: 'pointer', color: getColor(index) }"
      @click="nowChooseR = index">
      {{ c.name }}
    </span>
  </p>
  <p>
    <component :is="nowComponentR" />
  </p>
</template>
