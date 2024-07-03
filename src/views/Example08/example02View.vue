<script setup lang="ts">
import type { Course, ResultVO, User } from '@/datasource/Types'
import { listCoursesService } from './Example08Service'
import { ref } from 'vue'

useFetch('users/12')
  .get()
  .json<ResultVO<{ user: User }>>()
  .then((resp) => {
    resp.data.value?.data.user && (userR.value = resp.data.value.data.user)
  })

const userR = ref<User>({})
useGet<{ user: User }>('users/12').then((resp) => {
  resp.data.value?.data.user && (userR.value = resp.data.value?.data.user)
})
const coursesR = ref<Course[]>([])
const choseUserF = async (userId: number) => {
  coursesR.value = await listCoursesService(userId)
}
</script>
<template>
  <div>
    <h2>Mock</h2>
    {{ userR?.id }}/{{ userR?.name }}
    <a href="" @click.prevent="choseUserF(userR.id!)">
      {{ userR.name }}
    </a>
    <br />
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">
        {{ c.name }}
      </li>
    </ul>
  </div>
</template>
