<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ data: { name: string; isFinished: boolean }[]; choice: string }>()

const emits = defineEmits<{ (e: 'EditList', data: { name: string; isFinished: boolean }): void }>()
const editF = (data: { name: string; isFinished: boolean }) => {
  emits('EditList', data)
}
const showListR = computed(() => {
  return props.data.filter((d) => {
    if (props.choice == 'all') return true
    if (props.choice == 'finish') return d.isFinished == true
    if (props.choice == 'unfinish') return d.isFinished == false
  })
})
</script>
<template>
  <div>
    <ul>
      <li v-for="(item, index) in showListR" :key="index">
        <input type="checkbox" @click="editF(item)" v-model="item.isFinished" />
        <label>{{ item.name }}</label>
        <span :class="item.isFinished ? 'finishC' : 'unfinishC'">
          {{ item.isFinished ? '已完成' : '未完成' }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.finishC {
  background-color: gold;
}
.unfinishC {
  background-color: red;
}
</style>
