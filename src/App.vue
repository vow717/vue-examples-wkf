<script setup lang="ts">
import ExampleAllView from './views/ExampleAllView.vue'
import SidebarView from './views/SidebarView.vue'
</script>
<template>
  <div id="app">
    <SidebarView />
    <ExampleAllView />
  </div>
</template>
<style>
div {
  display: block;
}
#app {
  display: flex;
  height: 1000px;
  max-width: 1200px;
  margin: 5px auto;
}
</style>
