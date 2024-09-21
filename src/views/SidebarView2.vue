<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div data-div-border>
    <h1>Element-Plus</h1>
    <h2><router-link to="">Home</router-link></h2>
    <h2>BasicComponents</h2>
    <ul>
      <li>
        <router-link to="/ElementPlus/BasicComponents/ButtonView">Button按钮</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/BorderAndColorView">
          Border边框和Color色彩
        </router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/ContainerView">Container布局容器</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/IconView">Icon布局容器</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/OtherView">其他组件</router-link>
      </li>
    </ul>
    <h2><router-link to="/ElementPlus/ConfigProviderView">配置组件</router-link></h2>
    <h2>Form表单组件</h2>
    <ul>
      <li>
        <router-link to="/ElementPlus/FormComponents/AutocompleteView">自动补全输入框</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
[data-div-border] {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
li {
  margin: 3px;
}
</style>
