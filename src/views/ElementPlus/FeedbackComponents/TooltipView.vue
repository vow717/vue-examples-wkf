<script setup lang="ts"></script>
<template>
  <div>
    <p>
      el-tooltip,有9种文字提示方向，placement属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start,
      end，默认为空。 如
      placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
    </p>
    <p>content=" 文字提示 内容 "</p>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="Left Top prompts info"
      placement="left-start">
      <el-button>left-start</el-button>
    </el-tooltip>
    <p>同样可以具名插槽content自定义文本提示</p>
  </div>
</template>
