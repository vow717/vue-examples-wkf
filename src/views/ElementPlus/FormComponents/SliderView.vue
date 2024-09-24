<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>
<template>
  <div>
    <p>el-slider v-model绑定响应式数据,加个show-input显示输入框</p>
    <el-slider v-model="value1" show-input />
    <p>placement指定数值提示的位置</p>
    <p>加个range属性实现范围选择模式</p>
    <p>vertical属性为垂直模式，必须加个heigth=""控制高度</p>
    <el-slider v-model="value2" vertical height="200px" />
  </div>
</template>
