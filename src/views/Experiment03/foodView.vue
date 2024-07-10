<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { Shop } from './food/FoodInf'
import { fetchShopsService } from './Experiment03Service'

// 定义响应式变量
const shopsR = ref<Shop[]>([])

/*阻塞方法（一开始什么都看不到，因为阻塞了，等await完就全能看到了)
const loading=async()=>{
  shopsR.value=await fetchShopsService()
}
await loading()
*/

/*非阻塞方法（可以先看到"美食列表"，因为shopsR没东西，所以下面是空白的)
fetchShopsService().then((s) => (shopsR.value = s))
*/

/*因为父组件home里有suspense包裹,子组件中的数据加载逻辑使用 async/await，使得在数据加载完成之前，不进行渲染。Suspense 会捕获这个状态*/
shopsR.value = await fetchShopsService()
</script>

<template>
  <div>
    <p>美食列表:</p>
    <div v-for="(shop, index) in shopsR" :key="index" class="card">
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
