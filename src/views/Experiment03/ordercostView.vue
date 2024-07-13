<script setup lang="ts">
import { computed } from 'vue'
import { fetchOrdersService } from './Experiment03Service'

const OrdersS = fetchOrdersService()

const costC = computed(() =>
  // reduce(callback, index)类似递归函数；callback函数，pre，前一次结果；cur，当前遍历对象
  OrdersS.value.reduce((pre, cur) => pre + cur.quantity * (cur.item.price ?? 0), 0).toFixed(2)
)
</script>

<template>
  <div>
    <router-link to="/experiment03/home/order">订单总花费: {{ costC }}</router-link>
  </div>
</template>

<style>
button {
  margin-top: 10px;
}
</style>
