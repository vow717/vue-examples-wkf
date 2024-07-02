<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { type Course } from '@/datasource/Types'
import { useExample06Store } from './useExample06Store'
import { listCoursesService } from './listCoursesService'

const Editbutton = defineAsyncComponent(() => import('./Model02View.vue'))

listCoursesService()
const coursesR = useExample06Store().coursesS
const activeR = ref(false)
const courseEditedNameR = ref('')
const courseEditR = ref<Course>({})
const countR = ref(0)

const editCourse = (course: Course) => {
  courseEditR.value = course
  courseEditedNameR.value = course.name || ''
  activeR.value = true
}
</script>
<template>
  <div>
    <h2>defineModel</h2>
    <p>子组件通过defineModel()函数声明暴露的双向绑定数据，父组件绑定子组件数据至本地响应式数据。</p>
    <p>通过defineModel()函数，须在父子组件分别声明数据，再通过函数把数据对接互交</p>
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
    <p>{{ countR }}/{{ courseEditedNameR }}</p>
    <Editbutton
      v-if="activeR"
      :course="courseEditR"
      v-model:active="activeR"
      v-model:count="countR"
      v-model:coursename="courseEditedNameR" />
  </div>
</template>
<!-- 传递 Props (:course)
        : 语法用于传递 prop，将父组件的值传递给子组件。-->
<!-- 使用 v-model 进行双向绑定
      v-model 用于在父组件和子组件之间创建双向绑定，使得父组件的值和子组件的值可以相互同步。 -->
