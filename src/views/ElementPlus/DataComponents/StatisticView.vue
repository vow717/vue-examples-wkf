<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>
<template>
  <div>
    <p>el-statistic title设置标题， :value=""给定数额</p>
    <p>如果需要在标题里加Icon等元素就templete #title 利用插槽写。#suffix就是内容最后加的</p>
    <el-statistic :value="138">
      <template #title>
        <div style="display: inline-flex; align-items: center">
          Ratio of men to women
          <el-icon style="margin-left: 4px" :size="12">
            <Male />
          </el-icon>
        </div>
      </template>
      <template #suffix>/100</template>
    </el-statistic>

    <p>el-countdown倒计时组件</p>
    <el-col :span="8">
      <el-countdown title="Remaining VIP time" format="HH:mm:ss" :value="value1" />
      <el-button class="countdown-footer" type="primary" @click="reset">Reset</el-button>
    </el-col>

    <p>统计卡片 详细看网站</p>
    <p>https://element-plus.org/zh-CN/component/statistic.html</p>
  </div>
</template>
