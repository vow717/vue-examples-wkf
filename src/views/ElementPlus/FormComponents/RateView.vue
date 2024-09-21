<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(3.4)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>
<template>
  <div>
    <p>el-rate ，可以:colors="colors"然后创建个colors控制颜色</p>
    <p>
      const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value:
      '#F7BA2A', excluded: true }, 5: '#FF9900' }
    </p>
    <el-rate v-model="value1" />
    |
    <el-rate v-model="value2" :colors="colors" />
    <p>allow-half允许半星</p>
    <p>辅助文字 :texts="['oops', 'disappointed', 'normal', 'good', 'great']" 再加个show-text</p>
    <p>:icons="icons"改变图标种类</p>
    <p>
      disabled只读，此时show-score则会在右侧显示目前分值，可以使用属性 score-template
      来提供评分模板。 模板为一个包含了 {value} 的字符串，{value} 会被替换为当前分值。
    </p>
    <el-rate
      v-model="value3"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value} points" />
  </div>
</template>
