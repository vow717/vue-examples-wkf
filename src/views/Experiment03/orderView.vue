<script setup lang="ts">
import { fetchOrdersService } from './Experiment03Service'

const ordersR = fetchOrdersService()
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
