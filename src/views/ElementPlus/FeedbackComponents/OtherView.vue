<script setup lang="ts">
import { ref } from 'vue'
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const open = () => {
  ElMessage('This is a message.')
}

const openVn = () => {
  ElMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}
</script>
<template>
  <div>
    <h2>Loading加载</h2>
    <p>只需写v-loading="loading",然后loading是ref(true/false)控制加载与加载完成</p>
    <p>element-loading-text="Loading..." 添加加载时下方的加载文字</p>
    <p>全屏遮罩则需要v-loading.fullscreen.lock="fullscreenLoading"</p>
    <el-button
      v-loading.fullscreen.lock="fullscreenLoading"
      type="primary"
      @click="openFullScreen1">
      As a directive
    </el-button>
    <h2>Message消息提示</h2>
    <p>
      Element Plus 注册了一个全局的 $message方法用于调用。 Message 可以接收一个字符串或一个 VNode
      作为参数，它会被显示为正文内容。
    </p>
    <el-button :plain="true" @click="open">Show message</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <p>同时ElMessage里还可以加type:'waring' 这样的改变样式</p>
    <p>showClose: true,加这个就可以有手动关闭消息的功能</p>
  </div>
</template>
