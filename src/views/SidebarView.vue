<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div data-div-border>
    <h1>Vue examples</h1>
    <h2><router-link to="">Home</router-link></h2>
    <h2>Components API</h2>
    <ul>
      <li>
        <router-link to="/example01/01">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example01/02">reactive()函数</router-link>
      </li>
    </ul>
    <h2>Route With Params</h2>
    <ul>
      <li>
        <router-link to="/example02/01/students/188/homeworks/299">
          userRoute传参(sid=188,hid=299)
        </router-link>
      </li>
      <li>
        <router-link to="/example02/01/students/345/homeworks/122">
          userRoute传参(sid=345,hid=122)
        </router-link>
      </li>
    </ul>
    <h2>Directives</h2>
    <ul>
      <li>
        <router-link to="/example03/01">v-if & v-bind & v-show</router-link>
      </li>
      <li>
        <router-link to="/example03/02">v-for</router-link>
      </li>
      <li>
        <router-link to="/example03/03">v-model</router-link>
      </li>
    </ul>
    <h2>Component</h2>
    <ul>
      <li>
        <router-link to="/example04/01">Dynamic</router-link>
      </li>
    </ul>
    <h2>Global Store</h2>
    <ul>
      <li>
        <router-link to="/example05/01">State</router-link>
      </li>
      <li>
        <router-link to="/example05/02">Actions</router-link>
      </li>
    </ul>
    <h2>Passing Data to Child</h2>
    <h2>Component</h2>
    <ul>
      <li>
        <router-link to="/example06/01">DefineProps</router-link>
      </li>
      <li>
        <router-link to="/example06/02">WayOne</router-link>
      </li>
      <li>
        <router-link to="/example06/03">WayTwo</router-link>
      </li>
      <li>
        <router-link to="/example06/04">WayThree</router-link>
      </li>
    </ul>
    <h2>Functional Component</h2>
    <ul>
      <li>
        <router-link to="/example07/01">Del</router-link>
      </li>
    </ul>
    <hr />
    <h1>实验</h1>
    <h3><router-link to="/experiment02/01">实验二</router-link></h3>
    <h3><router-link to="/experiment03/home">实验三</router-link></h3>
    <hr />
    <h1>作业</h1>
    <h3><router-link to="/homework01/01">作业一</router-link></h3>
    <h3><router-link to="/homework02/01">作业二</router-link></h3>
  </div>
</template>

<style>
[data-div-border] {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
li {
  margin: 3px;
}
</style>
