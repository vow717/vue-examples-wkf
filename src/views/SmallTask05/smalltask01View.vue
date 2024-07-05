<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import type { Department, Teacher } from './smalltask01Mock'
import childcomponent from './smalltask02View.vue'

const { fetchDepartments } = usesmalltask01Store()
const departmentsR = ref<Department[]>([])
const selectedDepartmentId = ref<string>('')

const loadDepartments = async () => {
  departmentsR.value = await fetchDepartments()
}
const exposeR = ref<{ teacher: Teacher }>()
onMounted(loadDepartments)
</script>
<template>
  <div>
    <h3>选择专业:</h3>
    <select v-model="selectedDepartmentId">
      <option value=""></option>
      <option v-for="(d, index) of departmentsR" :key="index" :value="d.id">{{ d.name }}</option>
    </select>
    已选老师:{{ exposeR?.teacher.name }}
    <childcomponent ref="exposeR" :departmentId="selectedDepartmentId" />
  </div>
</template>
