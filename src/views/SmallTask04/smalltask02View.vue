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
import { ref, onMounted, watch } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import type { Course } from '@/datasource/Types'
import CourseComponent from './smalltask03View.vue'

const { fetchCourses, coursesS } = usesmalltask01Store()

const coursesR = ref<Course[]>([])

const loadCourses = async () => {
  coursesR.value = await fetchCourses()
}
watch(
  coursesS,
  (newCourses) => {
    console.log('课程列表已更新:', newCourses)
    coursesR.value = newCourses
  },
  { deep: true }
)

onMounted(loadCourses)
</script>
<style>
ul {
  list-style-type: none;
}
</style>
