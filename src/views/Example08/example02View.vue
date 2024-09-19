<script setup lang="ts">
import type { Course, User } from '@/datasource/Types'
import { listCoursesService, useGet } from './Example08Service'
import { ref } from 'vue'
const userR = ref<User>({})

useGet<{ user: User }>('users/12').then((resp) => {
  resp.data.value?.data.user && (userR.value = resp.data.value?.data.user)
})

const coursesR = ref<Course[]>([])
const choseUserF = async (userId: number) => {
  coursesR.value = await listCoursesService(userId)
  console.log('getting coursesR')
}
choseUserF
</script>
<template>
  <div>
    <h2>Mock</h2>
    {{ userR?.id }}/{{ userR?.name }}
    <!--
     @click.prevent：阻止事件的默认行为。它会阻止触发dom的原始事件，而只执行我们自定义的事件。
     例如：在代码里写入一个<a>标签，在点击<a>标签时，会默认触发一次跳转，跳转到目标URL：
     但如果我们不想让它跳转，而是在点击<a>标签时执行我们的自定义方法，那就需要用到@click.prevent
   -->
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
