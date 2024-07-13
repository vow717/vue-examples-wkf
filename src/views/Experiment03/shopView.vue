<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { type Shop } from './food/FoodInf'
import {
  fetchShopService,
  addOrderService,
  delOrderService,
  fetchOrdersService
} from './Experiment03Service'

// 接受/:id 的id
const route = useRoute()
const id = route.params.id as string

// 响应式数据
const shopR = ref<Shop | null>(null)
const ordersR = fetchOrdersService()

shopR.value = await fetchShopService(id)
</script>

<template>
  <div>
    <h3>{{ shopR?.name }}</h3>
    <div v-for="(eating, index) in shopR?.Eatings" :key="index" style="display: flex">
      <img :src="eating.imgUrl" style="width: 300px; padding: 5px" />
      <div>
        {{ eating.name }}
        <br />
        价格：{{ eating.price }}
        <br />
        月销量：{{ eating.monthBuy }}
        <br />
        <button @click="delOrderService(eating)">-</button>
        {{ ordersR.find((o) => o.item.name === eating.name)?.quantity || 0 }}
        <button @click="addOrderService(eating)">+</button>
      </div>
    </div>
  </div>
</template>

<style>
button {
  margin-top: 10px;
}
</style>
