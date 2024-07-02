<script setup lang="ts">
import { render } from 'vue'
import { type Course } from '@/datasource/Types'
const props = defineProps<{ course: Course }>()
const close = () => {
  props.close && props.close()
  //将 null（即没有任何内容）渲染到 document.body 中。
  //这个操作会将之前通过 render 渲染到 document.body 中的内容（通常是一个组件或 HTML 元素）移除掉。这种做法常用于关闭弹窗或移除某个组件或内容区域。
  render(null, document.body)
}
</script>
<template>
  <div class="modal" @click="close">
    <div class="modal-dialog" @click.stop>
      <div class="modal-header">
        <h1>模态框</h1>
      </div>
      <hr />
      <div class="modal-content">
        <p>
          确认删除
          <span style="color: red; font-size: 25px">{{ props.course.name }}</span>
          吗？
        </p>
      </div>
      <hr />
      <div class="modal-footer">
        <button class="btn btn-primary" @click="close">确认</button>
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
