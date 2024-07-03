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
    <button @click="addComponent()">加载组件</button>
    <hr />
    <p>第一次，可能慢点</p>
    <ChildComponent v-if="componentsToShow" />
    <hr />
    <p>已经加载过了</p>
    <ChildComponent v-if="componentsToShow" />
    <hr />
    <p>已经加载过了</p>
    <ChildComponent v-if="componentsToShow" />
  </div>
</template>
