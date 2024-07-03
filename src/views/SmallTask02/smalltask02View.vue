<template>
  <div>
    <ul>
      <li v-for="course in courses" :key="course.id">{{ course.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Course } from '@/datasource/Types'

const props = defineProps<{
  courses: Course[]
}>()
</script>
