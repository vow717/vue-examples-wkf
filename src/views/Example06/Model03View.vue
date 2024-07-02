<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { defineEmits, ref } from 'vue'
//对外暴露事件，属性均为函数
const props = defineProps<{ course: Course }>()
const courseR = ref<Course>({ name: props.course?.name })
const emit = defineEmits<{
  (e: 'emitSubmit', data: string): void
  (e: 'emitClose'): void
}>()
//声明执行函数；绑定组件中的操作事件
//声明2个事件，及传递的参数
const submitF = () => emit('emitSubmit', courseR.value.name ?? '')
const closeF = () => emit('emitClose')
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
          监听emitSubmit事件的回调函数。 当emitSubmit事件触发时。
          获取事件传入的数据(子组件激活事件时传入)。 将数据传给父组件的响应式属性。
          修改移除子组件的数据标识。
        </p>
        <input v-model="courseR.name" />
      </div>
      <hr />
      <div class="modal-footer">
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
