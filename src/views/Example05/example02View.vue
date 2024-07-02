<script setup lang="ts">
import { useExample05Store } from './example05Store'
import { ref } from 'vue'
import type { User } from '@/datasource/Types'
const store = useExample05Store()
const userR = store.userS
const myUserR = ref<User>({})
const updateUserF = () => {
  setTimeout(() => {
    store.userS.value = myUserR.value
  }, 1000)
}
</script>
<template>
  <div>
    <h2>Actions</h2>
    <p>
      Store其内部定义的数据为Ref响应式。因此，当在多组件中作为变量引用时，均响应式更新。且支持直接替换对象。
      <br />
      输入的是本地const的myUserR,显示的是store里的userS。
    </p>
    姓名/地址:
    <br />
    {{ userR?.name }}/{{ userR?.address }}
    <br />
    姓名name:
    <input type="text" v-model="myUserR.name" />
    <br />
    地址address:
    <input type="text" v-model="myUserR.address" />
    <br />
    <button type="button" @click="updateUserF">延迟更新</button>
  </div>
</template>
