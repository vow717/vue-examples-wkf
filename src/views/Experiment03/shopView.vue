<script setup lang="ts">
import type { Eating, Shop } from './food/foodInf'
import { useService } from './experiment03Service'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LoadingView from './E3Component/loadingView.vue'

// 接受/:id 的id
const route = useRoute()
const id = route.params.id as string

const shopR = ref<Shop | null>(null)

const { fetchShopService, addOrderService, delOrderService, getQuantityService } = useService()

const loadingR = ref(false)
const loading = async () => {
  shopR.value = await fetchShopService(id)
  loadingR.value = true
}
onMounted(loading)

// 初始化每个商品的数量
const quantities = ref<{ [key: string]: number }>({})

const initQuantities = () => {
  if (shopR.value && shopR.value.Eatings) {
    shopR.value.Eatings.forEach(async (eating) => {
      const itemName = eating.name || 'unknown'
      quantities.value[itemName] = await getQuantityService(eating)
    })
  }
}

const addF = async (eating: Eating) => {
  await addOrderService(eating)
  const itemName = eating.name || 'unknown'
  quantities.value[itemName] = await getQuantityService(eating)
}

const delF = async (eating: Eating) => {
  await delOrderService(eating)
  const itemName = eating.name || 'unknown'
  quantities.value[itemName] = await getQuantityService(eating)
}

watch(shopR, initQuantities)
</script>

<template>
  <div v-if="loadingR">
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
        <button @click="delF(eating)">-</button>
        {{ quantities[eating.name || 'unknown'] || 0 }}
        <button @click="addF(eating)">+</button>
      </div>
    </div>
  </div>
  <div v-else>
    <LoadingView />
  </div>
</template>

<style>
button {
  margin-top: 10px;
}
</style>
