<script setup lang="ts">
import { ref } from 'vue'
import phonelogin from './PhoneLogin.vue'
import emaillogin from './EmailLogin.vue'
const toggle = ref(false)
</script>
<template>
  <div>
    <p>通过component标签:is属性，动态绑定组件。用于简单的，无需路由的组件切换</p>
    <p>改变登入方式:</p>
    <button type="button" @click="toggle = !toggle">Change</button>
    <hr />
    <keep-alive>
      <component :is="toggle ? phonelogin : emaillogin" />
    </keep-alive>
  </div>
</template>
