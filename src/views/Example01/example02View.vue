<script setup lang="ts">
import type { User } from '@/datasource/Types'
import { reactive } from 'vue'
const user: User = {
  id: 111,
  name: 'bo',
  insertTime: '2040-02-01',
  address: '950'
}
const userAsync: User = {
  id: 123,
  name: 'wkfwkf',
  insertTime: '2046-04-09',
  address: '956'
}
let userReact = reactive(user)
const changeUserWrong = () => {
  setTimeout(() => {
    userReact = userAsync
  }, 1000)
}
const changeUserReact = () => {
  setTimeout(() => {
    userReact.id = userAsync.id
    userReact.name = userAsync.name
    userReact.insertTime = userAsync.insertTime
    userReact.address = userAsync.address
  })
}
</script>
<template>
  <h2>reactive</h2>
  <div>
    <p>
      reactive()函数。支持对象/数组，不支持基本数据类型。返回数据的代理对象
      支持对对象属性改变的响应式，但改变对象引用将失效
    </p>
    <div>
      <p>id:{{ userReact.id }}</p>
      <p>name:{{ userReact.name }}</p>
      <p>insertTime:{{ userReact.insertTime }}</p>
      <p>address:{{ userReact.address }}</p>
    </div>
    <button type="button" @click="changeUserWrong()">通过改变对象的引用(无用)</button>
    <br />
    <button type="button" @click="changeUserReact()">通过改变对象的属性值（有用)</button>
  </div>
</template>
<style></style>
