<script setup lang="ts">
import { usesmalltask01Store } from './smalltask01Store'
const teacher = usesmalltask01Store().teacherGlobal
</script>
<template>
  <div>
    <h2>组件2里</h2>
    <h3>教师信息</h3>
    <p>name:{{ teacher.name }}</p>
    <p>age:{{ teacher.age }}</p>
  </div>
</template>
