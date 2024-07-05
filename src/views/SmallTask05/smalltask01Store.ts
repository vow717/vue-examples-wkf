import { ref } from 'vue'
import type { Department, Teacher } from './smalltask01Mock'
import { fetchDepartmentsMock, fetchTeachersByDepartmentMock } from './smalltask01Mock'

const departmentsS = ref<Department[]>([])
const teachers = ref<Teacher[]>([])

const fetchDepartments = async (): Promise<Department[]> => {
  if (departmentsS.value.length === 0) {
    departmentsS.value = await fetchDepartmentsMock()
  }
  return departmentsS.value
}

const fetchTeachersByDepartment = async (departmentId: string): Promise<Teacher[]> => {
  teachers.value = await fetchTeachersByDepartmentMock(departmentId)
  return teachers.value
}

const store = { fetchDepartments, fetchTeachersByDepartment }

export const usesmalltask01Store = () => {
  return store
}
