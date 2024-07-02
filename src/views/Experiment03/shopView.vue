<script setup lang="ts">
import type { Eating, Shop } from './food/foodInf'
import { useExample05Store } from './experiment03Store'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sname = route.params.sname as string

const store = useExample05Store()
const shops = store.listShops
const shop = shops.value.find((s) => s.name == sname)
</script>
<template>
  <div>
    <h3>{{ shop?.name }}</h3>
    <div v-for="(eating, index) of shop?.Eatings" :key="index" style="display: flex">
      <img :src="eating.imgUrl" style="width: 300px; padding: 5px" />
      <div>
        {{ eating.name }}
        <br />
        价格：{{ eating.price }}
        <br />
        月销量：{{ eating.monthBuy }}
        <br />
      </div>
    </div>
  </div>
</template>
