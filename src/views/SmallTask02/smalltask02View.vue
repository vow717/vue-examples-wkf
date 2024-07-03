<template>
  <div>
    <button @click="loadCourses">加载课程</button>
    <ul v-if="activeR && coursesS.length > 0">
      <li v-for="course in coursesS" :key="course.id">
        {{ course.name }}
        <br />
        {{ course.createTime }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { listCoursesService } from './smalltask01Service'
import { usesmalltask01Store } from './smalltask01Store'

const { coursesS } = usesmalltask01Store()
const activeR = ref(false)
//async用来定义一个异步函数。它使得函数内部可以使用 await 关键字。
const loadCourses = async () => {
  await listCoursesService()
  activeR.value = true
}
</script>
