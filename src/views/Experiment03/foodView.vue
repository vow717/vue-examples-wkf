<script setup lang="ts">
import type { Shop } from './food/foodInf'
import { useService } from './experiment03Service'
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import LoadingView from './E3Component/loadingView.vue'

const { fetchShopsService } = useService()
const isLoading = ref(true)
const shops = ref<Shop[]>([])

const loading = async () => {
  shops.value = await fetchShopsService()
  isLoading.value = false
}
onMounted(loading)
</script>
<template>
  <div>
    <p>美食列表:</p>
    <div v-if="!isLoading">
      <div v-for="(shop, index) in shops" :key="index">
        <router-link :to="`/experiment03/home/shop/${shop.id}`">
          <div class="card">
            <h2>{{ shop.name }}</h2>
            评分:{{ shop.score }}
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="isLoading">
      <LoadingView />
    </div>
  </div>
</template>
<style>
.card {
  border: 1px solid black;
  width: 200px;
}
</style>
