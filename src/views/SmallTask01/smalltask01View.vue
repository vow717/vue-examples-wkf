<script setup lang="ts">
import { usesmalltask01Store } from './smalltask01Store'
import smalltask02View from './smalltask02View.vue'
const teacher = usesmalltask01Store().teacherGlobal
const upAge = usesmalltask01Store().upAge
const downAge = usesmalltask01Store().downAge
</script>
<template>
  <div>
    <h2>教师信息</h2>
    <p>name:{{ teacher.name }}</p>
    <p>age:{{ teacher.age }}</p>
    <h3>修改老师年龄:</h3>
    <button type="button" @click="upAge">加</button>
    <button type="button" @click="downAge">减</button>
    <hr />
    <smalltask02View />
  </div>
</template>
