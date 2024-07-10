<script setup lang="ts">
import OrderCostView from './OrdercostView.vue'
import LoadingView from './E3Component/LoadingView.vue'
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

    <!-- 通过这种方式，内部的路由组件可以变成“阻塞”的组件，即在数据加载完成之前，不会进行渲染。这是因为 Suspense 会等待其包裹的内容中的异步操作完成。-->
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <!--不知道为什么不会显示-->
        <LoadingView />
      </template>
    </Suspense>
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
