<script setup lang="ts">
import { useExample05Store } from './experiment03Store'
import { RouterLink, RouterView } from 'vue-router'

const store = useExample05Store()
const shops = store.listShops
</script>
<template>
  <div>
    <p>美食列表:</p>
    <div v-for="(shop, index) in shops" :key="index">
      <router-link :to="`/experiment03/shop/${shop.name}`">
        <div class="card">
          <h2>{{ shop.name }}</h2>
          评分:{{ shop.score }}
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<style>
.card {
  border: 1px solid black;
  width: 200px;
}
</style>
