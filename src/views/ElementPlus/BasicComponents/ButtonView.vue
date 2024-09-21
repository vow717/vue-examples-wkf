<script setup lang="ts">
import { Check, Delete, Edit, Share, Message, Search, Star, Upload } from '@element-plus/icons-vue'
</script>
<template>
  <div>
    <p>
      type="default primary success info warning danger" 表示按钮类型，主要是颜色的差别(注意小写)
    </p>
    <el-button type="primary">Primary</el-button>
    <el-button type="warning">Warning</el-button>
    <p>plain表示淡背景，加在后面就行</p>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <p>round顾名思义，圆一点的，也是加在后面</p>
    <el-button type="primary" plain round>Primary</el-button>
    <el-button type="warning" plain round>Warning</el-button>
    <p>'@element-plus/icons-vue'中有许多自带的图形，可以去找来import一些,再:icon="xxx"使用</p>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
    <p>禁止点击，直接加个disabled在后面</p>
    <el-button type="primary">Primary</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <p>el-icon可以为按钮添加更多含义,如这个文字＋图标的按钮</p>
    <el-button type="primary">
      Upload
      <el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
    <p>按钮组el-button-group</p>
    <el-button-group>
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" />
      <el-button type="primary" :icon="Delete" />
    </el-button-group>
    <p>除了默认大小，还有size="large small"</p>
    <el-button size="small">Small</el-button>
    <el-button>默认</el-button>
    <el-button size="large">large</el-button>
    <p>tag可以自定义元素标签，如tag="a",tag="div"。在此基础上再加对应元素</p>
    <el-button
      type="primary"
      tag="a"
      href="https://github.com/element-plus/element-plus"
      target="_blank"
      rel="noopener noreferrer">
      a
    </el-button>
  </div>
</template>
