<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { useStore } from './Experiment4Store'
import { loginService, coursesService } from './Experiment4Service'

const coursesR = ref<Course[]>([])
const userForm = ref<{ number: string; password: string }>({ number: '', password: '' })
const userR = useStore().UserS

const loginF = async () => {
  if (userForm.value.number == '' || userForm.value.number == '') {
    throw '账号密码不能为空'
  }
  const user: { number: string; password: string } = {
    number: userForm.value.number,
    password: userForm.value.password
  }
  await loginService(user)

  //登入完后页面的账号密码清空
  userForm.value.number = ''
  userForm.value.password = ''
}

const coursesF = async () => {
  await coursesService()
  coursesR.value = useStore().CoursesS.value
}
</script>
<template>
  <div>
    <h2>实验四</h2>
    <p>账号密码为2022212927时，可登录看个人信息，无权限查看课程信息。</p>
    <p>账号密码为admin时，可登录看个人信息，有权限查看课程信息。</p>
    <p>
      请输入账号:
      <input v-model="userForm.number" />
    </p>
    <p>
      请输入密码:
      <input v-model="userForm.password" />
    </p>
    <button @click="loginF">登入</button>

    <button @click="coursesF">查看课程信息</button>
  </div>
  <br />
  {{ userR?.name }}
  {{ userR?.title }}
  {{ userR?.age }}
  <br />
  <hr />
  <ul>
    <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
  </ul>
</template>
