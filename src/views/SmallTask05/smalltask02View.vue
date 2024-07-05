<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { usesmalltask01Store } from './smalltask01Store'
import { type Department, type Teacher } from './smalltask01Mock'
const { fetchDepartments, fetchTeachersByDepartment } = usesmalltask01Store()

const loading = ref<boolean>(false)

const departmentsR = ref<Department[]>([])
const departmentId = ref<string>('')
const teachersR = ref<Teacher[]>([])
const selectedTeacher = ref<Teacher>({})

defineExpose<{ teacher: Ref<Teacher> }>({ teacher: selectedTeacher })

const loadingDepartments = async () => {
  departmentsR.value = await fetchDepartments()
  loading.value = false
}
loadingDepartments()

watch(
  () => departmentId.value,
  async () => {
    loading.value = true
    selectedTeacher.value = {}
    teachersR.value = await fetchTeachersByDepartment(departmentId.value)
    loading.value = false
  }
)
</script>
<template>
  <h3>选择专业:</h3>
  <select v-model="departmentId">
    <option value=""></option>
    <option v-for="(d, index) of departmentsR" :key="index" :value="d.id">{{ d.name }}</option>
  </select>
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
