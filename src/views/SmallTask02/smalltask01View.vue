<script lang="ts" setup>
import { ref, watch } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import ChildComponent from './smalltask02View.vue'
import { listCoursesService } from './smalltask01Service'
import type { Course } from '@/datasource/Types'

const { coursesS } = usesmalltask01Store()
const coursesR = ref<Course[]>([])
const componentsToShow = ref<boolean[]>([false, false, false])

const loadAndShowCourses = async (index: number) => {
  // 模拟第一次加载数据较慢
  if (coursesS.value.length === 0) {
    //更新store里的响应式数据,等await执行完了才会继续往下
    await listCoursesService()
  }
  coursesR.value = coursesS.value
  componentsToShow.value[index - 1] = true
}

// 使用 watch 监听 coursesS 的变化
watch(
  coursesS,
  (newCourses) => {
    coursesR.value = newCourses
  },
  { deep: true }
)
</script>
<template>
  <div>
    <button @click="loadAndShowCourses(1)">加载课程(第一次,慢)</button>
    <br />
    <ChildComponent v-if="componentsToShow[0]" :courses="coursesR" />
    <hr />
    <button @click="loadAndShowCourses(2)">加载课程(第二次 快)</button>
    <br />
    <ChildComponent v-if="componentsToShow[1]" :courses="coursesR" />
    <hr />
    <button @click="loadAndShowCourses(3)">加载课程(第三次 快)</button>
    <ChildComponent v-if="componentsToShow[2]" :courses="coursesR" />
  </div>
</template>
