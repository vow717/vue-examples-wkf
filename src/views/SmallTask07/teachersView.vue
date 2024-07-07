<script setup lang="ts">
import type { Teacher } from '@/datasource/Types'
import { useStore } from './store'
import { ref } from 'vue'

const { listTeachersStore } = useStore()
const teachersR = ref<Teacher[]>([])

teachersR.value = await listTeachersStore()
</script>
<template>
  <div>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>departmentId</td>
        <td>age</td>
      </tr>
      <tr v-for="(t, index) of teachersR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ t.name }}</td>
        <td>{{ t.departmentId }}</td>
        <td>{{ t.age }}</td>
      </tr>
    </table>
  </div>
</template>
