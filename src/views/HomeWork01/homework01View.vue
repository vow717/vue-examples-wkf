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
function getColor(index: number): string {
  return index === nowChooseR.value ? 'red' : 'black'
}
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
