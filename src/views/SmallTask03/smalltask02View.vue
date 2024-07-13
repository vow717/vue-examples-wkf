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
import { ref } from 'vue'
//没有store了，组件只和业务逻辑耦合
import { listCoursesService } from './smalltask01Service'
import type { Course } from '@/datasource/Types'
import CourseComponent from './smalltask03View.vue'

const coursesR = ref<Course[]>([])

coursesR.value = (await listCoursesService()).value
</script>
<style>
ul {
  list-style-type: none;
}
</style>
