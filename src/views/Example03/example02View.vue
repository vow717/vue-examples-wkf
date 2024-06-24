<script setup lang="ts">
import { listCourses } from '@/datasource/Types'
import { ref } from 'vue'
const coursesR = ref(listCourses())
const removeItemF = (index: number) => {
  coursesR.value.splice(index, 1)
}
const object = {
  title: '我是title',
  auto: '我是auto',
  people: '我是people'
}
</script>
<template>
  <div>
    <h2>v-for</h2>
    <p>
      tr v-for="(c, index) of coursesR" :key="index"
      <br />
      为了跟踪每个节点的标识，从而重用和重新排序现有元素，需要为每项提供一个唯一 key 属性。理想的
      key 值是每项都有的且唯一值
    </p>
    <hr />
    <table>
      <tr>
        <td>#</td>
        <td>ID</td>
        <td>NAME</td>
        <td>CREATETIME</td>
        <td>OPERATE</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.id }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td><button type="button" @click="removeItemF(index)">删除</button></td>
      </tr>
    </table>
    <hr />
    <p>
      支持用 v-for 来遍历一个对象而非数组的 property
      <br />
      共支持3个参数。value，对象属性值；name，对象属性名称；index，索引
    </p>
    <div v-for="(value, name, index) in object" :key="index" display:none>
      {{ name }}:{{ value }}
    </div>
  </div>
</template>
<style>
td {
  text-align: center;
}
</style>
