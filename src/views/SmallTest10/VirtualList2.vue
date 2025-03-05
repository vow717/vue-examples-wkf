<template>
  <div>
    <h1>VirtualList2</h1>
    <ul>
      <li v-for="item in dynamicData" :key="item.id" :style="{ height: item.height + 'px' }">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 模拟动态高度数据
const dynamicData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: '动态内容 '.repeat(Math.random() * 50 + 10), // 随机长度内容
  height: null as number | null // 实际高度缓存
}))
</script>

<style scoped></style>
