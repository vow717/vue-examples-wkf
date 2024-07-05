<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import type { Teacher } from './smalltask01Mock'
const { fetchTeachersByDepartment } = usesmalltask01Store()

const props = defineProps<{ departmentId: string }>()
const selectedTeacher = ref<Teacher>({})
const teachersR = ref<Teacher[]>([])
defineExpose<{ teacher: Ref<Teacher> }>({ teacher: selectedTeacher })
watch(
  () => props.departmentId,
  async () => {
    selectedTeacher.value = {}
    teachersR.value = props.departmentId ? await fetchTeachersByDepartment(props.departmentId) : []
  }
)
</script>
<template>
  <div v-if="departmentId">
    <h3>选择教师</h3>
    <select v-model="selectedTeacher">
      <option v-for="(teacher, index) of teachersR" :key="index" :value="teacher">
        {{ teacher.name }}
      </option>
    </select>
  </div>
</template>
