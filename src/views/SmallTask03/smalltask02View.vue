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
//没有store了，组件只和业务逻辑耦合
import { usesmalltask01Store } from './smalltask01Store'
import { listCoursesService } from './smalltask01Service'
import type { Course } from '@/datasource/Types'
import CourseComponent from './smalltask03View.vue'

const coursesR = ref<Course[]>([])
const { coursesS } = usesmalltask01Store()
//async用来定义一个异步函数。它使得函数内部可以使用 await 关键字。
const loadCourses = async () => {
  //组件只和业务逻辑耦合在一起，直接coursesR接受list返回来的数据
  coursesR.value = await listCoursesService()
}

watch(
  coursesS,
  (newCourses) => {
    console.log('课程列表已更新:', newCourses)
    coursesR.value = newCourses
  },
  { deep: true }
)

// 使用 onMounted 钩子在组件挂载时执行 loadCourses 函数
onMounted(loadCourses)
</script>
<style>
ul {
  list-style-type: none;
}
</style>
