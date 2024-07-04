<template>
  <div class="course-card">
    <h4>{{ course.name }}</h4>
    <p>{{ course.createTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Course } from '@/datasource/Types'

// 接收父组件传递的课程数据
const props = defineProps<{
  course: Course
}>()
</script>

<style>
.course-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
.course-card:hover {
  box-shadow: 0 14px 18px rgba(0, 0, 0, 0.1);
}
h4 {
  margin: 8px;
  font-size: 25px;
}
p {
  margin: 0;
  color: #555;
}
</style>
