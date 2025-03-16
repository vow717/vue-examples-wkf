<script setup lang="ts">
import { defineEmits } from 'vue'
import { ref } from 'vue'
// const props=defineProps<{data:{name:string,isFinished:boolean}[]}>();
// const datalist=props.data;
const emit = defineEmits<{ (e: 'AddList', data: { name: string; isFinished: boolean }): void }>()
const InPutR = ref<string>('')
const addF = () => {
  emit('AddList', { name: InPutR.value, isFinished: false })
  InPutR.value = ''
}
</script>
<template>
  <div>
    <input type="text" v-model="InPutR" style="display: inline" />
    <button @click="addF">添加任务</button>
  </div>
</template>
