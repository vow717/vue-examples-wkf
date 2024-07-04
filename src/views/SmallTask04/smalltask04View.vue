<script setup lang="ts">
import { usesmalltask01Store } from './smalltask01Store'
import { ref } from 'vue'
import type { Course } from '@/datasource/Types'

const store = usesmalltask01Store()
const addCourse = store.addCourse
const courseName = ref('')

const addCourseF = async () => {
  const newCourse: Course = {
    id: Date.now(),
    name: courseName.value,
    createTime: '2024/7'
  }
  await addCourse(newCourse)
  console.log('4view:课程已添加:', newCourse)
  courseName.value = ''
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
