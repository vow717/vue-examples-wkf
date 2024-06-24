<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/datasource/Types'
const userRef1 = ref<User>({ name: 'wkf', id: 101, sex: 'man' })
const userRef2 = ref<User>({ name: 'ccc', id: 102, sex: 'woman' })
const closeRef = ref(false)
const useActionRef = ref(false)
const pActive = ref(false)
const colorP = ref('white')
const changeClose = () => {
  closeRef.value = !closeRef.value
}
const changeUseActionRef = () => {
  useActionRef.value = !useActionRef.value
}
</script>
<template>
  <div>
    <h2>v-if</h2>
    <p>userRef1信息：</p>
    <p>name:{{ userRef1.name }}</p>
    <p>id:{{ userRef1.id }}</p>
    <p>sex:{{ userRef1.sex }}</p>
    <p>userRef2信息：</p>
    <p>name:{{ userRef2.name }}</p>
    <p>id:{{ userRef2.id }}</p>
    <p>sex:{{ userRef2.sex }}</p>
    <hr />
    <p>仅可见男性信息</p>
    <button type="button" @click="changeClose()">展示男性性别的学生姓名</button>
    <p v-if="closeRef != false && userRef1.sex && userRef1.sex == 'man'">{{ userRef1.name }}</p>
    <p v-if="closeRef != false && userRef2.sex && userRef2.sex == 'man'">{{ userRef2.name }}</p>
    <hr />
    <h2>v-show</h2>
    <p>
      与v-if不同，元素始终会被渲染并保留在DOM中。v-show只是简单地通过修改元素display属性实现/显示隐藏
    </p>
    <hr />
    <h2>v-bind</h2>
    <p>
      v-bind。动态绑定标签属性，至响应式数据的表达式 缩写，例如v-bind:disabled可缩写为: disabled
      。即，动态绑定的属性以`:`为前缀。如： button type="button"
      :disabled="!useActionRef"提交/button
    </p>
    <label>
      <input type="checkbox" @click="changeUseActionRef()" />
      同意以下条款
    </label>
    <br />
    <button type="button" :disabled="!useActionRef">提交</button>
    <p @mouseover="pActive = true" @mouseleave="pActive = false" :class="{ 'bg-red': pActive }">
      到我上面就变红
    </p>
    <p @mouseover="colorP = 'red'" @mouseleave="colorP = 'white'" class="v-bind-color">
      到我上面就变红
    </p>
  </div>
</template>

<style>
.bg-red {
  background-color: red;
}
.v-bind-color {
  background-color: v-bind(colorP);
}
</style>
