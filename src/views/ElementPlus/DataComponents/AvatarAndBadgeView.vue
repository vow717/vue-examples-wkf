<script setup lang="ts">
const circleUrl =
  'https://img0.baidu.com/it/u=1768698556,2619240289&fm=253&fmt=auto&app=138&f=PNG?w=300&h=300'

const errorHandler = () => true
</script>
<template>
  <div>
    <h2>Avatar头像</h2>
    <p>el-avatar，shapa="" :size=""控制头像的形状和大小，:src=""控制头像的地址</p>
    <el-avatar shape="circle" :size="50" :src="circleUrl" />
    <p>
      @error="函数"为图片加载失败时的回退行为，在el-avatar里面加个img
      src="xxx"写的就是图片加载失败时候显示的头像
    </p>
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
    <p>:fit=""设置该图片如何在容器展示，与object-fit属性一致,具体看网站</p>

    <h2>Badge勋章</h2>
    <p>el-badge,:value=""为右上角小数字的多少，:max="99"为显示的最大值</p>
    <el-badge :value="200" :max="99">
      <el-button>comments</el-button>
    </el-badge>
    |
    <el-badge :value="90" :max="99">
      <el-button>abcdef</el-button>
    </el-badge>

    <p>当 value 是 String 时，可以显示自定义文字</p>
    <el-badge value="new">
      <el-button>comments</el-button>
    </el-badge>
    <p>加个is-dot通过一个小红点标记来告知用户有新内容。</p>
    <el-badge is-dot>query</el-badge>
    <p>
      :offset="[10,5]"设置徽章点的偏移，格式是[左，顶部]， 代表状态点从左侧和默认位置顶部的偏移。
    </p>
    <el-badge :value="1" :offset="[10, 5]">
      <el-button>offset</el-button>
    </el-badge>
    |
    <el-badge :value="1" :offset="[-10, 2]">
      <el-button>offset</el-button>
    </el-badge>
  </div>
</template>
