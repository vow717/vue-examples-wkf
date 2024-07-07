<script setup lang="ts">
import { render } from 'vue'
import type { Course } from '@/datasource/Types'
import { createModalDialog2 } from './Modal'

const props = defineProps<{ course: Course }>()
const close = () => {
  //将 null（即没有任何内容）渲染到 document.body 中。
  //这个操作会将之前通过 render 渲染到 document.body 中的内容（通常是一个组件或 HTML 元素）移除掉。
  render(null, document.body)
}

const confirm = async () => {
  return new Promise<void>((resolve) => {
    // 创建并显示 ModalDialog2
    createModalDialog2()

    // 在 2 秒后移除 ModalDialog2 并关闭当前的 ModalDialog
    setTimeout(() => {
      close()
      resolve()
    }, 2000)
  })
}
</script>
<template>
  <div class="modal" @click="close">
    <div class="modal-dialog" @click.stop>
      <div class="modal-dialog-header">亲爱的用户</div>
      <div class="modal-dialog-body">
        您确定要删除课程
        <span style="color: red">{{ props.course.name }}</span>
        吗?
      </div>
      <div class="modal-dialog-footer">
        <button type="button" data-modal-dismiss @click="close">取消</button>
        <button type="button" data-modal-dismiss @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  width: 500px;
  height: 350px;
  margin: 10% auto;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}
.modal-dialog-content {
  width: 100%;
  height: 100%;
  letter-spacing: 2px;
}
.modal-dialog-header {
  font-size: 35px;
  height: 25%;
  padding-left: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.modal-dialog-body {
  font-size: 20px;
  padding: 5px;
  height: 50%;
  border-bottom: 1px solid #ccc;
}
.modal-dialog-footer {
  overflow: auto;
  text-align: right;
  padding: 10px;
  height: 25%;
}

[data-modal-dismiss] {
  padding: 10px;
  font-size: 25px;
  border-radius: 5px;
  cursor: pointer;
  background-color: deepskyblue;
  transition: background-color 0.3s;
}
[data-modal-dismiss]:hover {
  background-color: cornflowerblue;
}
</style>
