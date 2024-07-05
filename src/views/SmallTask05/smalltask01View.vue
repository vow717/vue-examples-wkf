<script setup lang="ts">
import { ref } from 'vue'
import type { Teacher } from './smalltask01Mock'
import childcomponent from './smalltask02View.vue'

const exposeR = ref<{ teacher: Teacher }>()
</script>
<template>
  <div>
    已选老师:{{ exposeR?.teacher.name }}/{{ exposeR?.teacher.age }}
    <childcomponent ref="exposeR" />
  </div>
</template>
