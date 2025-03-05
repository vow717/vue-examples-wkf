<template>
  <div class="container">
    <!-- 可视区域容器 -->
    <div class="virtual-list" @scroll="handleScroll" ref="listContainer">
      <!-- 撑开滚动条的占位元素 -->
      <div class="scroll-placeholder" :style="{ height: totalHeight + 'px' }"></div>

      <!-- 实际渲染的列表项 -->
      <div class="visible-items" :style="{ transform: `translateY(${offset}px)` }">
        <div v-for="item in visibleData" :key="item.id" class="list-item">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 模拟数据生成（10万条）
const mockData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  content: `列表项 ${i + 1}`
}))

// 虚拟列表相关变量
const listContainer = ref<HTMLElement>()
const itemHeight = 60 // 每个列表项的高度（需要与实际样式一致）
const visibleCount = ref(0) // 可视区域能显示的条目数
const startIndex = ref(0) // 起始索引
const offset = ref(0) // 偏移量

// 计算总高度
const totalHeight = computed(() => mockData.length * itemHeight)

// 计算可见数据
const visibleData = computed(() => {
  const endIndex = startIndex.value + visibleCount.value + 2 // +2作为缓冲区
  return mockData.slice(startIndex.value, endIndex)
})

// 初始化计算可见数量
onMounted(() => {
  if (listContainer.value) {
    // clientHeight：元素可见高度,由padding+height计算而来
    // offsetHeight：元素可见高度,由padding+height+border+(scroll滚动条高度)计算而来
    visibleCount.value = Math.ceil(listContainer.value.clientHeight / itemHeight)
  }
})

// 滚动事件处理
const handleScroll = () => {
  if (!listContainer.value) return

  const scrollTop = listContainer.value.scrollTop
  startIndex.value = Math.floor(scrollTop / itemHeight)
  offset.value = scrollTop - (scrollTop % itemHeight)
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.virtual-list {
  height: 600px; /* 固定高度 */
  overflow-y: auto; /* 启用垂直滚动 */
  position: relative; /* 相对定位 */
  border: 1px solid #ebeef5;
}

.scroll-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.visible-items {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.list-item {
  height: 60px; /* 必须与itemHeight一致 */
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

.list-item:hover {
  background-color: #f5f7fa;
}
</style>
