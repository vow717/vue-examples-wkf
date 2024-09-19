<script setup lang="ts">
import { listCourses } from '@/datasource/Types'
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { createDelDialog } from './index'
const coursesR = ref<Course[]>(listCourses())
</script>
<template>
  <div>
    <h2>Functional Components</h2>
    <p>h(type, props, children): VNode，可将指定HTML片段/vue组件创建为虚拟节点对象的函数。</p>
    <p>render(VNode, container): void，挂载虚拟节点对象到指定容器的函数。</p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>creatTime</td>
        <td>操作</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ c.id }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td><button @click="createDelDialog(c)">删除</button></td>
      </tr>
    </table>
  </div>
</template>
