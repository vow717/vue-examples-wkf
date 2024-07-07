<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { useStore } from './store'
import loadingView from './loadingView.vue'
import teachersView from './teachersView.vue'

const { listCoursesStore } = useStore()
const coursesR = ref<Course[]>([])
coursesR.value = await listCoursesStore()

const lookTeachersR = ref(false)
const lookTeachersF = () => {
  console.log('点击查看教师')
  lookTeachersR.value = true
}
</script>
<template>
  <div>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
      </tr>
    </table>
  </div>
  <div>
    <button @click="lookTeachersF">点击查看教师</button>
    <suspense v-if="lookTeachersR">
      <template #default>
        <teachersView />
      </template>
      <template #fallback>
        <loadingView />
      </template>
    </suspense>
  </div>
</template>
