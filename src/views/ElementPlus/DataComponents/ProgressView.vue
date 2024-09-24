<script setup lang="ts">
const format = (percentage: any) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>
<template>
  <div>
    <p>el-progress 组件里设置:percentage属性即表示进度条对应的百分比，必填，0-100内</p>
    <p>可以设置:format来自定义文字显示格式</p>
    <p>status="success warning exception" 可以改变进度条样式</p>
    <div class="demo-progress">
      <el-progress :percentage="50" />
      <el-progress :percentage="100" :format="format" />
      <el-progress :percentage="100" status="success" />
      <el-progress :percentage="100" status="warning" />
      <el-progress :percentage="50" status="exception" />
    </div>
    <p>:stroke-width=""可以改变进度条高度，:text-inside="true"可以启用进度条内部文字。</p>
    <p>type="circle"环状进度条</p>
    <el-progress type="circle" :percentage="25" />
    <p>type="dashboard"仪表盘进度条</p>
    <el-progress type="dashboard" :percentage="40" />

    <p>条纹进度条</p>
    <p>striped静态条纹，再加上striped-flow为动态条纹</p>
    <el-progress :percentage="50" :stroke-width="15" striped />
    <el-progress :percentage="20" :stroke-width="15" striped striped-flow />
  </div>
</template>
<style>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
