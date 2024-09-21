<script setup lang="ts"></script>
<template>
  <div>
    <p>使用： npm install @element-plus/icons-vue</p>
    <p>
      注册所有图标：// 如果您正在使用CDN引入，请删除下面一行。 import * as ElementPlusIconsVue from
      '@element-plus/icons-vue' const app = createApp(App) for (const [key, component] of
      Object.entries(ElementPlusIconsVue)) { app.component(key, component) }
    </p>
    <p>直接浏览器引入：script src="//unpkg.com/@element-plus/icons-vue" /script</p>
    <p>el-icon (可以在父组件添加元素如size,color) Edit / /el-icon</p>
    <div>
      <el-icon :size="20" :color="2">
        <Edit />
      </el-icon>
      <!-- 或者独立使用它，不从父级获取属性 -->
      <Edit />
    </div>
    <p>添加额外的类名class="is-loading"，图标就会2s旋转360°</p>
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
    <p>图标集合：https://element-plus.org/zh-CN/component/icon.html</p>
  </div>
</template>
