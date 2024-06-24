<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const route = useRoute()
watch(
  route,
  () => {
    console.log(route.params)
  },
  { immediate: true }
)
</script>
<template>
  <div>
    <p>
      通过vue-router的useRoute()函数获取当前路由对象 params，获取restful参数对象
      fullPath，路由完整路径 query，传统基于`?`的路径传参
      基于路由地址传入的参数，必须是string类型(类似通过地址栏向服务器传参)
    </p>
    <p>route.params对象:{{ route.params }}</p>
    <p>SID:{{ route.params.sid }}</p>
    <p>HID:{{ route.params.hid }}</p>
  </div>
</template>
