<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref, defineAsyncComponent } from 'vue'
import { listCoursesService } from './listCoursesService'
import { useExample06Store } from './useExample06Store'

const Editbutton = defineAsyncComponent(() => import('./Model03View.vue'))

listCoursesService()
const coursesR = useExample06Store().coursesS

const courseEditR = ref<Course>({})
const activeR = ref(false)
const courseEditedNameR = ref('')

const onEmitSubmit = (name: string) => {
  activeR.value = false
  courseEditedNameR.value = name
}

const editCourse = (c: Course) => {
  activeR.value = true
  courseEditedNameR.value = c.name || ''
  courseEditR.value = c
}
</script>
<template>
  <div>
    <h2>defineEmits</h2>
    <p>
      子组件通过defineEmits()函数，声明暴露的事件。
      事件类型为函数。参数1为事件名称，参数2为事件激活时传递的参数
    </p>
    <p>通过自定义函数激活指定名称的事件，并传递数据</p>

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
    <Editbutton
      v-if="activeR"
      :course="courseEditR"
      @emitClose="activeR = false"
      @emitSubmit="onEmitSubmit" />
    <!-- 这里的 @emitClose 表示监听 Editbutton 组件触发的 emitClose 事件。
       当 emitClose 事件被触发时，将 activeR 设置为 false。
       @emitSubmit同理-->
  </div>
</template>
