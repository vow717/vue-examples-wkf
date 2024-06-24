<script setup lang="ts">
import { ref } from 'vue'
import { watch } from 'vue'
import type { User } from '@/datasource/Types'
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
const userRef = ref(user)
const changeUserRef = () => {
  setTimeout(() => {
    userRef.value = userAsync
  }, 500)
}
watch(
  userRef,
  (newUser, oldUser) => alert(`watch被激活，${oldUser.name}的信息已经改变成${newUser.name}的了`),
  { deep: true }
)
</script>
<template>
  <div>
    <h2>ref()</h2>
    <p>
      ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
      在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
    </p>
    <p>
      user和userAsync是两个对象，ref对他们响应式变换。
      <br />
      const userRef = ref(user)
      <br />
      const changeUserRef = () => { userRef.value = userAsync； }
    </p>
    <hr />
    <h2>watch激活</h2>
    <p>
      watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)。
      watch()必须监听响应式属性(Ref对象)。支持2/3个参数；
      默认仅被监听响应式数据改变执行回调，当被监听响应式数据为对象，则对象中属性数据或属性数据对象中的数据改变时不回调。
      参数1，被监听的响应式数据； 参数2，响应式数据改变的回调函数，可传入new/old值；
      参数3，监听选项对象，对象中可声明deep: true属性，可监听对象中属性的改变
    </p>
    <div>
      <p>id:{{ userRef.id }}</p>
      <p>name:{{ userRef.name }}</p>
      <p>insertTime:{{ userRef.insertTime }}</p>
      <p>address:{{ userRef.address }}</p>
    </div>
    <button type="button" @click="changeUserRef">改变信息</button>
    <hr />
  </div>
</template>
<style></style>
