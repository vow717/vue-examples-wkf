<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>
<template>
  <div>
    <p>el-transfer，数据通过data属性传入</p>
    <p>data要是一个对象数组，每个对象具有以下属性:</p>
    <p>
      key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止被操作。
      目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。
    </p>
    <el-transfer v-model="value" :data="data" />
  </div>
</template>
