<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')
const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>
<template>
  <h2>自动补全</h2>
  <p>fetch-suggestions 属性是返回建议输入的方法。 有点击一直显示建议和输入显示建议两个方法。</p>
  <div style="max-width: 200px">
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      clearable
      class="inline-input w-50"
      placeholder="Please Input"
      @select="handleSelect" />
  </div>
  <p>还有从服务端获取搜索数据</p>
  <p>https://element-plus.org/zh-CN/component/autocomplete.html</p>
  <h2>Cascader级联选择</h2>
  <p>触发子菜单</p>
</template>
