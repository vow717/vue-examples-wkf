<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useService } from './experiment03Service'
import type { Order } from './food/foodInf'

const { fetchOrdersService } = useService()
const ordersR = ref<Order[]>([])
const loading = async () => {
  ordersR.value = await fetchOrdersService()
}
onMounted(loading)
</script>
<template>
  <div>
    <ul>
      <li v-for="(o, index) of ordersR" :key="index">{{ o.item.name }}:{{ o.quantity }}</li>
    </ul>
  </div>
</template>
