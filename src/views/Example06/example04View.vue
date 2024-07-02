<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { listCoursesService } from './listCoursesService'
import { useExample06Store } from './useExample06Store'
import type { Course } from '@/datasource/Types'

const Editbutton = defineAsyncComponent(() => import('./Model04View.vue'))
listCoursesService()
const coursesR = useExample06Store().coursesS

const activeR = ref<boolean>(false)
const courseEditedNameR = ref('')
const courseEditR = ref<Course>({})

const closeItem = () => {
  activeR.value = false
}
const submitItem = (name: string) => {
  courseEditedNameR.value = name
  closeItem()
}
const editCourse = (c: Course) => {
  courseEditR.value = c
  activeR.value = true
}
</script>
<template>
  <div>
    <h2>defineProps</h2>
    <p>defineProps()函数将需要子组件渲染或执行的数据或函数从父组件传入子组件。 在子组件中声明。</p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>creatTime</td>
        <td>操作</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ c.id }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td><button @click="editCourse(c)">编辑</button></td>
      </tr>
    </table>
    <p>{{ courseEditedNameR }}</p>
  </div>
  <Editbutton v-if="activeR" :course="courseEditR" :close="closeItem" :submit="submitItem" />
</template>
