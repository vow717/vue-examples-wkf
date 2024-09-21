<script setup lang="ts"></script>
<template>
  <div>
    <pre style="font-size: 18px">
用于布局的容器组件，方便快速搭建页面的基本结构： 
el-container：外层容器。 
当子元素中包含el-header 或 el-footer时，全部子元素会垂直上下排列， 否则会水平左右排列。
el-header：顶栏容器。 
el-aside：侧边栏容器。 
el-main：主要区域容器。 
el-footer：底栏容器。
    </pre>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px" style="background-color: aqua">Aside</el-aside>
        <el-container>
          <el-header style="background-color: antiquewhite">Header</el-header>
          <el-main style="background-color: aliceblue">Main</el-main>
          <el-footer style="background-color: antiquewhite">Footer</el-footer>
        </el-container>
      </el-container>
    </div>
    <p>
      就是要注意el-container的直接子元素必须是后四个组件中的一个或多个。
      后四个组件的父元素必须是一个 el-containerel。包裹方式决定效果。
    </p>
  </div>
</template>
