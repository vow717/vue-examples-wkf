<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useService } from './experiment03Service'

// 使用 useService 获取服务方法
const { fetchCostService } = useService()

// 创建一个响应式的 totalCost 变量
const totalCost = ref<number>(0)

// 使用 fetchCostService 计算总花费
const updateTotalCost = async () => {
  totalCost.value = await fetchCostService()
}

onMounted(updateTotalCost)

/*
自动收集依赖：当 watchEffect 首次执行时，updateTotalCost 函数中的所有响应式数据（如 OrdersR）都会被自动收集为依赖。
立即执行：watchEffect 在创建时会立即执行 updateTotalCost 一次，以确保初始状态是最新的。
依赖变化时重新执行：当 OrdersR 或其内部数据发生变化时，watchEffect 会重新执行 updateTotalCost，以确保总花费始终是最新的。
*/
watchEffect(updateTotalCost)

// 计算属性，用于动态获取总花费
const computedTotalCost = computed(() => totalCost.value)
</script>

<template>
  <div>
    <router-link to="/experiment03/home/order">订单总花费: {{ computedTotalCost }}</router-link>
  </div>
</template>

<style>
button {
  margin-top: 10px;
}
</style>
