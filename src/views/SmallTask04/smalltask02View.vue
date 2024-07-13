<template>
  <div>
    <ul>
      <li v-for="(course, index) of coursesR" :key="index">
        <CourseComponent :course="course" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usesmalltask01Store } from './smalltask01Store'
import CourseComponent from './smalltask03View.vue'
import { ref } from 'vue'
import type { Course } from '@/datasource/Types'
const { fetchCourses } = usesmalltask01Store()
const coursesR = ref<Course[]>([])
coursesR.value = (await fetchCourses()).value
</script>
<style>
ul {
  list-style-type: none;
}
</style>
