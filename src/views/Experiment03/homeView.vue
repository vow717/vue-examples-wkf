<script setup lang="ts">
import OrderCostView from './ordercostView.vue'
</script>
<template>
  <div>
    <div>
      <router-link to="/experiment03/home/food" class="padding">美食</router-link>
      |
      <router-link to="/experiment03/home/location" class="padding">本地</router-link>
      |
      <router-link to="/experiment03/home/running" class="padding">跑腿</router-link>
    </div>
    <OrderCostView />
    <router-view />
  </div>
</template>
<style>
.padding {
  padding: 5px;
  text-decoration: none;
}
.dd {
  border-radius: 10px;
  background-color: goldenrod;
}
</style>
