<script setup lang="ts">
import { listCourses, listTitles } from '@/datasource/Types'
import type { User, Course } from '@/datasource/Types'
import { computed, ref } from 'vue'

const userR = ref<User>({ courses: [] })
const titles = listTitles()
const courses = listCourses()
const agreedR = ref(false)
const selectedCourses: Course[] = [{ id: 4135 }]
const coursesR = ref<Course[]>(selectedCourses)
const checkboxsR = ref<HTMLInputElement[]>([])
const amount = 2
const checkboxDisabledC = computed(
  () => (index: number) =>
    !agreedR.value || (coursesR.value.length >= amount && !checkboxsR.value[index].checked)
)
const buttonDisabledC = computed(() => !agreedR.value || coursesR.value.length != amount)
</script>
<template>
  <div>
    <h2>Event</h2>
    <p>
      .stop，阻止事件冒泡 .prevent，阻止事件默认行为(超链接跳转等)
      .capture，在被内部元素触发前，先被修饰的外部元素触发(从父元素触发，与冒泡相反)
      .self，仅在当前元素触发，不包含子元素 .once，仅触发一次
      .passive，不阻止默认事件。一般用于触摸屏滚动
      https://v3.cn.vuejs.org/guide/events.html#事件修饰符
    </p>
    <hr />
    <h2>v-model</h2>
    <p>
      v-model指令。在表单元素上创建双向数据绑定 它会根据控件类型自动选取正确的方法来更新元素
      v-model本质上是语法糖，它负责监听用户的输入事件以更新数据 v-model会，忽略所有表单元素的
      value/checked/selected 特性的初始值，而总是将 Vue 实例的数据作为数据来源
    </p>
    <form>
      <p>输入姓名</p>
      <input type="text" v-model="userR.name" />
      <br />
      <label>
        <input type="radio" value="male" v-model="userR.sex" />
        男
      </label>
      <br />
      <!-- 两个<input type="radio">元素绑定到相同的v-model数据属性userR.sex，这实现了单选框组的功能。 -->
      <label>
        <input type="radio" value="famale" v-model="userR.sex" />
        女
      </label>
      <br />
      <select v-model="userR.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="userR.courses" :value="{ id: c.id }" />
          {{ c.name }}
          <br />
        </label>
      </template>
    </form>
    <p>{{ userR }}</p>

    <hr />
    <p>需同意条款并勾选2个课才能提交</p>
    <label>
      <input type="checkbox" v-model="agreedR" />
      同意条款
    </label>
    <br />
    <template v-for="(c, index) of courses" :key="index">
      <!-- ref="checkboxsR"将当前复选框元素添加到名为checkboxsR的引用中。 -->
      <label>
        <input
          type="checkbox"
          v-model="coursesR"
          ref="checkboxsR"
          :value="{ id: c.id }"
          :disabled="checkboxDisabledC(index)" />
        {{ c.name }}
        <br />
      </label>
    </template>
    <button type="button" :disabled="buttonDisabledC">提交</button>
    <p>{{ coursesR }}</p>
  </div>
</template>
