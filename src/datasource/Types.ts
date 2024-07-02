export interface Course {
  id?: number
  name?: string
  createTime?: string
}
export interface User {
  id?: number
  name?: string
  address?: string
  insertTime?: string
  sex?: string
  title?: Title
  courses?: Course[]
  level?: number
}
export interface Title {
  id?: number
  name?: string
}

export function listCourses() {
  const courses: Course[] = [
    { id: 1432, name: 'C语言程序设计', createTime: '2022/9' },
    { id: 2231, name: 'Java程序设计', createTime: '2024/3' },
    { id: 5323, name: 'Python', createTime: '2023/9' },
    { id: 4135, name: 'Web开发技术', createTime: '2024/3' }
  ]
  return courses
}

export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: '斗皇' },
    { id: 2, name: '斗王' },
    { id: 3, name: '斗师' }
  ]
  return titles
}
