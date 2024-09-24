<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()

const open = ref(false)
</script>
<template>
  <div>
    <p>Tour漫游式引导，分布引导用户了解功能的气泡组件</p>
    <p>
      el-tour v-model=""绑定个响应式数据，弄个开始引导的按钮，把这个数据改成true然后就可以开始引导
    </p>
    <p>
      el-tour-step,引导的一个步骤，:target="ref1?.$el"指定目标元素为ref1所引用按钮的底层DOM元素，Title="设置标题"，description描述
    </p>
    <el-button type="primary" @click="open = true">Begin Tour</el-button>
    <el-divider />

    <el-space>
      <el-button ref="ref1">Upload</el-button>
      <el-button ref="ref2" type="primary">Save</el-button>
      <el-button ref="ref3" :icon="MoreFilled" />
    </el-space>

    <el-tour v-model="open">
      <el-tour-step :target="ref1?.$el" title="Upload File">
        <div>Put you files here.</div>
      </el-tour-step>
      <el-tour-step :target="ref2?.$el" title="Save" description="Save your changes" />
      <el-tour-step :target="ref3?.$el" title="Other Actions" description="Click to see other" />
    </el-tour>
  </div>
</template>
