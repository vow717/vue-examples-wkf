<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { Shop } from './food/FoodInf'
import { fetchShopsService } from './Experiment03Service'
import LoadingView from './E3Component/LoadingView.vue'

// 定义响应式变量
const shops = ref<Shop[]>([])
const isLoading = ref(true)

// 定义异步加载函数
const loadShops = async () => {
  shops.value = await fetchShopsService()
  isLoading.value = false
}

// 调用加载函数
loadShops()
</script>

<template>
  <p>美食列表:</p>
  <div v-if="isLoading">
    <LoadingView />
  </div>
  <div v-else>
    <div v-for="(shop, index) in shops" :key="index">
      <router-link :to="`/experiment03/home/shop/${shop.id}`">
        <div class="card">
          <h2>{{ shop.name }}</h2>
          评分: {{ shop.score }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid black;
  width: 200px;
}
</style>
