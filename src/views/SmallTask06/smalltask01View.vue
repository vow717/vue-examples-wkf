<script setup lang="ts">
import { listCourses } from '@/datasource/Types'
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { createModalDialog } from './Modal'

const coursesR = ref<Course[]>(listCourses())
</script>
<template>
  <body>
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>姓名</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, index) of coursesR" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ c.name }}</td>
            <td><button @click="createModalDialog(c)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</template>
