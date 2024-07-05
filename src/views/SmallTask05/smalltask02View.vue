<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import type { Teacher } from './smalltask01Mock'
const { fetchTeachersByDepartment } = usesmalltask01Store()

const loading = ref<boolean>(false)
const props = defineProps<{ departmentId: string }>()
const selectedTeacher = ref<Teacher>({})
const teachersR = ref<Teacher[]>([])
defineExpose<{ teacher: Ref<Teacher> }>({ teacher: selectedTeacher })
watch(
  () => props.departmentId,
  async () => {
    loading.value = true
    selectedTeacher.value = {}
    teachersR.value = props.departmentId ? await fetchTeachersByDepartment(props.departmentId) : []
    loading.value = false
  }
)
</script>
<template>
  <div v-if="departmentId">
    <h3>选择教师</h3>
    <div v-if="loading">
      <img
        src="https://img.zcool.cn/community/01a25e5d6220d0a8012187f413dea0.gif"
        alt="Loading..." />
    </div>
    <div v-else>
      <select v-model="selectedTeacher">
        <option v-for="(teacher, index) of teachersR" :key="index" :value="teacher">
          {{ teacher.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style>
img {
  margin: 10px;
  height: 40px;
  width: 60px;
}
</style>
