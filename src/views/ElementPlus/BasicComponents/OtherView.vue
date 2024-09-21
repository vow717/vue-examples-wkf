<script setup lang="ts"></script>

<template>
  <div>
    <h2>Layout布局</h2>
    <p>使用24分栏法</p>
    <p>使用row col组件自由创建</p>
    <p>行提供:gutter指定列之间的间距。列的:span=""决定长度</p>
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="10">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </el-col>
    </el-row>
    <h2>Link和Text的用法大差不差和Button，类型差不多</h2>
    <h2>滚动条Scrollbar,height="xxxpx"控制高度</h2>
    <el-scrollbar height="400px">
      <p v-for="item in 20" :key="item">{{ item }}</p>
    </el-scrollbar>
    <h2>Space间距</h2>
    <p>el-space套住子元素，:size=""可以控制间距大小。wrap是自动换行，spacer="|"可添加分隔符</p>
    <el-space :size="15" spacer="|" wrap>
      <div v-for="i in 10" :key="i">
        <el-button>button {{ i }}</el-button>
      </div>
    </el-space>
  </div>
</template>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: antiquewhite;
}
</style>
