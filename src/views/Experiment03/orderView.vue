<script setup lang="ts">
import { ref } from 'vue'
import { fetchOrdersService } from './Experiment03Service'
import type { Order } from './food/FoodInf'

const ordersR = ref<Order[]>([])
ordersR.value = fetchOrdersService()
</script>

<template>
  <div>
    <Suspense>
      <ul>
        <li v-for="(o, index) of ordersR" :key="index">{{ o.item.name }}:{{ o.quantity }}</li>
      </ul>
    </Suspense>
  </div>
</template>
