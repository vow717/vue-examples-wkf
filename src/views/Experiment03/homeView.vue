<script setup lang="ts"></script>
<template>
  <div>
    <div>
      <router-link to="/experiment03/food" class="padding">美食</router-link>
      |
      <router-link to="/experiment03/location" class="padding">本地</router-link>
      |
      <a href="" class="padding">跑腿</a>
    </div>
    <p>总价:xxxx</p>
    <router-view />
  </div>
</template>
<style>
.padding {
  padding: 5px;
  text-decoration: none;
}
</style>
