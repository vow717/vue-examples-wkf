<script lang="ts" setup>
import { ref } from 'vue'
import ChildComponent from './smalltask02View.vue'

const componentsToShow = ref(false)

const addComponent = () => {
  componentsToShow.value = true
}
</script>
<template>
  <div>
    <button @click="addComponent">加载课程组件</button>
    <hr />
    <ChildComponent v-if="componentsToShow" />
  </div>
</template>
