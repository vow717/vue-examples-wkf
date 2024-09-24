<script setup lang="ts"></script>
<template>
  <div>
    <p>el-alert提示</p>
    <el-alert title="Success alert" type="success" />
    <el-alert title="Info alert" type="info" />
    <el-alert title="Warning alert" type="warning" />
    <el-alert title="Error alert" type="error" />
    <p>type="success info warning error" 为格式，然后effect="light dark"两个主题</p>
    <el-alert title="Success alert" type="success" effect="dark" />
    <el-alert title="Info alert" type="info" effect="light" />
    <p>还可以加show-icon添加与type对应的图标增添可读性。center文字居中，description增加描述</p>
    <el-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
      center />
  </div>
</template>
