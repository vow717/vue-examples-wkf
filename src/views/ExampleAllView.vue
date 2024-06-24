<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div data-div-routerview>
    <RouterView />
  </div>
</template>
<style>
[data-div-routerview] {
  width: 800px;
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
