<script setup lang="ts">
import { ref } from 'vue'
import coursesView from './coursesView.vue'
import loadingView from './loadingView.vue'

const lookCoursesR = ref(false)
const lookCoursesF = () => {
  console.log('点击查看课程')
  lookCoursesR.value = true
}
</script>
<template>
  <div>
    <button @click="lookCoursesF">点击查看课程</button>
    <suspense v-if="lookCoursesR">
      <template #default>
        <coursesView />
      </template>
      <template #fallback>
        <loadingView />
      </template>
    </suspense>
  </div>
</template>
