<script lang="ts" setup>
import ChildComponent from './smalltask02View.vue'
</script>
<template>
  <div>
    <h4>第一次加载，可能慢一些</h4>
    <ChildComponent />
    <hr />
    <h4>已经加载过</h4>
    <ChildComponent />
    <hr />
    <h4>已经加载过</h4>
    <ChildComponent />
  </div>
</template>
