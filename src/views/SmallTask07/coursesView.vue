<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { useStore } from './store'

const { listCoursesStore } = useStore()
const coursesR = ref<Course[]>([])
coursesR.value = await listCoursesStore()
</script>
<template>
  <div>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
      </tr>
    </table>
  </div>
</template>
