<template>
  <div>
    <div>
      <h3>Service & Store</h3>
      <p>
        在业务层发出网络请求；登录成功将响应结果user对象置于store，将响应头中token置于sessionstorage。
        <br />
        再次发出请求时，从sessionstorage中取出数据再请求中添加在header一起发出。
      </p>
      <br />
      1001/123456
    </div>
    <div>
      <input type="text" v-model="userForm.number" />
      <br />
      <input type="password" v-model="userForm.password" />
      <br />
      <button title="button" @click="loginF">Login</button>
      <br />
      {{ userR?.title }}
    </div>
    <div>
      <p>
        未登录发出的请求会返回401未登录业务码；token错误返回403无权限业务码，被请求拦截器拦截后激活自定义模态框，弹出错误信息。
      </p>
      <p>你好,{{ userR.name }}先生</p>
      <button type="button" @click="getHome">home</button>
      <br />
      <button @click="clearSessionStorageF">清空SessionStorage用于测试</button>
      <br />
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useExample08Store } from './Example08Store'
import { getHomeService, loginService } from './Example08Service'

interface User {
  number: string
  password: string
}

const userForm = ref<User>({ number: '', password: '' })
const userR = useExample08Store().userS

const coursesR = useExample08Store().coursesS
const getHome = async () => {
  await getHomeService()
}

const loginF = async () => {
  if (userForm.value.number.length == 0 || userForm.value.password.length == 0) {
    // 抛出后由统一异常处理程序处理
    throw '账号密码不能为空！'
  }
  const user: User = {
    number: userForm.value.number,
    password: userForm.value.password
  }
  await loginService(user)
  userForm.value.number = ''
  userForm.value.password = ''
}

const clearSessionStorageF = () => {
  sessionStorage.clear()
  userR.value = {}
  coursesR.value.length = 0
}
</script>
