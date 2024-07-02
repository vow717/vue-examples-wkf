<script setup lang="ts">
import { useExample05Store } from './example05Store'
const store = useExample05Store()
const countR = store.countS
//可以直接在这个组件里响应式修改store里的数据
const increment = () => store.countS.value++
</script>
<template>
  <div>
    <br />
    本地Ref响应式数据:{{ countR }}
    <br />
    Store数据:{{ store.countS }}
    <br />
    <button type="button" @click="increment">增加</button>
  </div>
</template>
