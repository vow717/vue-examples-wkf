<script setup lang="ts">
import type { GithubUser } from '@/datasource/Types'
import { ref } from 'vue'

import { useFetch } from '@vueuse/core'
const userR = ref<GithubUser>({})
/*
useFetch('https://api.github.com/users/vow717')：使用 useFetch 发起对 GitHub API 的请求，获取用户 vow717 的数据。
.get()：指定使用 GET 方法获取数据。
.json<GithubUser>()：将响应数据解析为 GithubUser 类型的 JSON 对象。
.then((resp) => resp.data.value && (userR.value = resp.data.value))：如果响应数据存在且有效，将其赋值给 userR。
*/
useFetch('https://api.github.com/users/vow717')
  .get()
  .json<GithubUser>()
  .then((response) => response.data.value && (userR.value = response.data.value))
//then 方法用于处理 Promise 对象的解析结果。当使用 useFetch 发起网络请求时，它返回一个 Promise 对象，该对象在请求完成时会解析出一个 response 对象，其中包含请求的结果数据。
</script>
<template>
  <div>
    <h2>useFetch</h2>
    <p>
      then 方法用于处理 Promise 对象的解析结果。当使用 useFetch 发起网络请求时，它返回一个 Promise
      对象，该对象在请求完成时会解析出一个 response 对象，其中包含请求的结果数据。
    </p>
    <img :src="userR.avatar_url" alt="正在加载..." style="width: 40%" />
    <br />
    login:{{ userR?.login }}
    <br />
    company:{{ userR?.company }}
    <br />
    repos_url:
    <router-link :to="`/example08/01?url=${userR.repos_url}`">
      {{ userR.repos_url }}
    </router-link>
    <br />
    public_repos: {{ userR?.public_repos }}
    <br />
    followers: {{ userR?.followers }}
    <br />
  </div>
</template>
