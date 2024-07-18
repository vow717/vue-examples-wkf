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

const { fetchCourses } = usesmalltask01Store()
const coursesR = await fetchCourses()
</script>
<style>
ul {
  list-style-type: none;
}
</style>
