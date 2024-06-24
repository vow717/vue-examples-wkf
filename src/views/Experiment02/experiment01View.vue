<script setup lang="ts">
import { ref } from 'vue'

interface Course {
  name: string
  score: number
  classTime: number
}

const scoreEnough = 13
const scoreNow = ref<number>(0)
const courses = ref<Course[]>([
  { name: 'Web前端开发技术', score: 2, classTime: 4 },
  { name: 'Java程序设计', score: 2.5, classTime: 4 },
  { name: 'XML与WebService技术', score: 2, classTime: 5 },
  { name: '算法设计', score: 2, classTime: 5 },
  { name: 'Web开发技术', score: 2.5, classTime: 5 },
  { name: '移动终端', score: 2.5, classTime: 5 },
  { name: '服务科学与SOA', score: 2, classTime: 6 },
  { name: '企业资源计划', score: 2, classTime: 6 },
  { name: 'Web系统框架', score: 2.5, classTime: 6 },
  { name: '大数据开发基础', score: 2.5, classTime: 6 },
  { name: 'Python', score: 2.5, classTime: 6 }
])

const selectCourses = ref<Course[]>([])
const toggleCourse = (course: Course) => {
  const index = selectCourses.value.findIndex((c) => c.name === course.name)
  if (index > -1) {
    selectCourses.value.splice(index, 1)
    scoreNow.value -= course.score
  } else {
    selectCourses.value.push(course)
    scoreNow.value += course.score
  }
  selectCourses.value.sort((a, b) => a.classTime - b.classTime)
  // 排序逻辑被封装在数据处理阶段，视图层只负责展示排序后的结果
}
</script>
<template>
  <div style="display: flex; align-items: flex-start">
    <div style="flex-direction: column">
      <div style="border: 1px solid black">
        <h3>可选课程</h3>
        <template v-for="(c, index) of courses" :key="index">
          <input type="checkbox" @change="toggleCourse(c)" />
          {{ c.name }} - {{ c.score }} ({{ c.classTime }})
          <br />
        </template>
      </div>
      <p :class="{ notEnough: scoreNow < scoreEnough, enough: scoreNow >= scoreEnough }">
        {{ scoreNow }}/{{ scoreEnough }}
      </p>
    </div>
    <div style="border: 1px solid black">
      <h3>已选课程</h3>
      <template v-for="(sc, index) of selectCourses" :key="index">
        {{ sc.name }} - {{ sc.score }} ({{ sc.classTime }})
        <br />
      </template>
    </div>
  </div>
  <div>
    <button type="button" v-if="scoreNow >= scoreEnough">提交</button>
  </div>
</template>
<style>
.notEnough {
  color: red;
}
.enough {
  color: rgb(49, 228, 49);
}
</style>
