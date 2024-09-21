<script setup lang="ts">
import ExampleAllView from './views/ExampleAllView.vue'
import SidebarView from './views/SidebarView.vue'
import SidebarView2 from './views/SidebarView2.vue'
import { ref } from 'vue'

const activeR = ref<boolean>(false)
const changeF = (s: boolean) => {
  activeR.value = s
}
</script>
<template>
  <div>
    <div>
      <h2>选择页面</h2>
      <button @click="changeF(true)">点击查看vue基础学习页面</button>
      |
      <button @click="changeF(false)">点击查看Element-Plus了解页面</button>
    </div>
    <div id="app">
      <component :is="activeR ? SidebarView : SidebarView2" />
      <ExampleAllView />
    </div>
  </div>
</template>
<style>
div {
  display: block;
}
#app {
  display: flex;
  height: auto;
  max-width: 1200px;
  margin: 5px auto;
}
</style>
