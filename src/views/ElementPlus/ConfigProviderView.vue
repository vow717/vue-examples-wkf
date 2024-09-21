<script setup lang="ts">
import { computed, ref } from 'vue'
import { zhCn } from 'element-plus/es/locales.mjs'
import { en } from 'element-plus/es/locales.mjs'
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
<template>
  <div>
    <p>通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。</p>
    <div>
      <el-button mb-2 @click="toggle">Switch Language</el-button>
      <br />

      <el-config-provider :locale="locale">
        <el-table mb-1 :data="[]" />
        <el-pagination :total="100" />
      </el-config-provider>
    </div>
  </div>
</template>
