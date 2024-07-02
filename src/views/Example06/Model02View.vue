<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
// 接收父组件传递的 props
const props = defineProps<{ course: Course }>()
const courseNameR = ref(props.course.name)
// 模态框的状态管理
const activeM = defineModel<boolean>('active')
const countM = defineModel('count', { default: 0 })
const courseNameM = defineModel<string>('coursename')
// 关闭模态框
const closeF = () => (activeM.value = false)
// 提交数据
const submitF = () => {
  courseNameM.value = courseNameR.value
  closeF()
}
</script>
<template>
  <div class="modal" @click="closeF">
    <div class="modal-dialog" @click.stop>
      <div class="modal-header">
        <h1>模态框</h1>
      </div>
      <hr />
      <div class="modal-content">
        <p>
          通过vue3.4提供的defineModel()函数，声明组件暴露的双向绑定的数据。
          从props传入的对象可以直接渲染。 双向绑定本地数据，提交时在赋值给双向绑定的父组件。
        </p>
        <input v-model="courseNameR" />
      </div>
      <p>COUNT:{{ countM }}</p>
      <hr />
      <div class="modal-footer">
        <button class="btn btn-primary" @click="countM++">COUNT++</button>
        <button class="btn btn-primary" @click="submitF">保存</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  background-color: white;
  position: relative;
  top: -10%;
  padding: 20px;
  width: 350px;
  height: auto;
  border-radius: 5px;
}
.modal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
