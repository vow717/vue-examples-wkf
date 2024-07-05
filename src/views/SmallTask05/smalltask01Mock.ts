export interface Department {
  id: string
  name: string
}

export interface Teacher {
  id: string
  name: string
  departmentId: string
  age: string
}

const departments: Department[] = [
  { id: '1', name: '软件工程' },
  { id: '2', name: '人工智能' },
  { id: '3', name: '计算机科学与技术' }
]

const teachers: Teacher[] = [
  { id: 'teacher1', name: '张锡英', departmentId: '1', age: '30' },
  { id: 'teacher2', name: '王波', departmentId: '1', age: '30' },
  { id: 'teacher3', name: '李莉', departmentId: '2', age: '30' },
  { id: 'teacher4', name: '边继龙', departmentId: '2', age: '30' },
  { id: 'teacher5', name: '单颖', departmentId: '3', age: '30' },
  { id: 'teacher6', name: '谷志新', departmentId: '3', age: '30' }
]

export const fetchDepartmentsMock = async (): Promise<Department[]> => {
  return new Promise<Department[]>((resolve) => {
    setTimeout(() => {
      resolve(departments)
    }, 1000)
  })
}

export const fetchTeachersByDepartmentMock = async (departmentId: string): Promise<Teacher[]> => {
  return new Promise<Teacher[]>((resolve) => {
    setTimeout(() => {
      const teachersFound = teachers.filter((teacher) => teacher.departmentId === departmentId)
      resolve(teachersFound)
    }, 1000)
  })
}
