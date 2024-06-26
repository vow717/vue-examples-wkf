<script setup lang="ts">
import { ref, watch } from 'vue'

interface Course {
  name: string
  score: number
  classTime: number
}

const scoreEnough = 13
const scoreNowR = ref<number>(0)
const coursesR = ref<Course[]>([
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

const selectCoursesR = ref<Course[]>([])
watch(selectCoursesR, () => {
  scoreNowR.value = 0
  selectCoursesR.value.forEach((c) => {
    scoreNowR.value += c.score
  })
  selectCoursesR.value.sort((a, b) => a.classTime - b.classTime)
})
</script>
<template>
  <div style="display: flex; align-items: flex-start">
    <div style="flex-direction: column">
      <div style="border: 1px solid black">
        <h3>可选课程</h3>
        <template v-for="(c, index) of coursesR" :key="index">
          <input type="checkbox" v-model="selectCoursesR" :value="c" />
          {{ c.name }} - {{ c.score }} ({{ c.classTime }})
          <br />
        </template>
      </div>
      <p :class="{ notEnough: scoreNowR < scoreEnough, enough: scoreNowR >= scoreEnough }">
        {{ scoreNowR }}/{{ scoreEnough }}
      </p>
    </div>
    <div style="border: 1px solid black">
      <h3>已选课程</h3>
      <template v-for="(sc, index) of selectCoursesR" :key="index">
        {{ sc.name }} - {{ sc.score }} ({{ sc.classTime }})
        <br />
      </template>
    </div>
  </div>
  <div>
    <button type="button" v-if="scoreNowR >= scoreEnough">提交</button>
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
<!-- 如果有一个 <input type="checkbox" v-model="selectedValues">，其中 selectedValues 是一个 ref 数组，那么当用户勾选这个复选框时，该复选框的 value 值会被加入到 selectedValues 数组中。-->
