<script setup lang="ts">
import { addCourseService, listCoursesService } from './smalltask01Service'
import { ref } from 'vue'
import type { Course } from '@/datasource/Types'

const courseName = ref('')

const addCourseF = async () => {
  const newCourse: Course = {
    id: Date.now(),
    name: courseName.value,
    createTime: '2024/7'
  }
  await addCourseService(newCourse)
  console.log('4view:课程已添加:', newCourse)
  courseName.value = ''

  //更新一下课程列表
  await listCoursesService()
}
</script>
<template>
  <div>
    <h2>请输入填写课程的名字:</h2>

    <input v-model="courseName" placeholder="课程名字" />
    <br />
    <button @click="addCourseF">添加</button>
  </div>
</template>
