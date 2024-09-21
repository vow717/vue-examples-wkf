<script setup lang="ts">
import { ref } from 'vue'
const form = ref({
  delivery: false,
  resource: '',
  region: ''
})

const inputR1 = ref()
const inputR2 = ref()
const numR=ref()
</script>
<template>
  <div>
    <h2>form表单</h2>
    <p>el-form包裹住，一个子项用el-form-item包裹</p>
    <p>开关框el-switch</p>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <p>单选框el-radio-group v-model="xxx"大的包裹，然后里面el-radio 正常写</p>
    <el-radio-group v-model="form.resource">
      <el-radio value="Sponsor">Sponsor</el-radio>
      <el-radio value="Venue">Venue</el-radio>
    </el-radio-group>
    <p>多选框一样,el-checkbox-group先大的包裹，然后小的正常写</p>
    <p>选项框el-select大的在外面，v-model双向绑定数据，里面el-option写value值</p>
    <el-select v-model="form.region">
      <el-option label="上海" value="shanghai" />
      <el-option label="北京" value="beijing" />
    </el-select>
    <p>对齐方式</p>
    <p>
      可以分别设置 el-form-item 的label-position如果值为空, 则会使用
      el-form的label-position。有right,left,top对齐方式。
    </p>
    <p>表单校验</p>
    <p>
      Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop
      属性设置为需要验证的特殊键值即可。
    </p>
    <p>如大的el-form :rules="rules" 然年const创建一个rules</p>

    <pre>
interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

const ruleForm =ref《RuleForm》({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: ''
})
   const rules = reactive《FormRules《RuleForm》》({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
]
})</pre
    >
    <p>这个规则的对象数组，一个对象的一个规则里，要求+不满足要求后的显示message</p>

    <h2>输入框input</h2>
    <p>show-password添加可显示隐藏的功能</p>
    <p>clearable添加右边全部删除功能</p>
    <el-input v-model="inputR1" style="width: 200px" clearable />
    <el-input
      v-model="inputR2"
      style="width: 200px"
      type="password"
      placeholder="请输入密码"
      show-password />

    <p>带图标的输入框，:suffix-icon="" 和 :prefix-icon=""分别在后前加图标</p>
    <p>复合型输入框。通关template插槽slot实现，如
        <pre> 
el-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Please input"
    
      template #prepend  Http://  /template
/el-input</pre>
    </p>
    <el-input
      v-model="inputR1"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>Http://</template>
    </el-input>

    <p>数字输入框el-input-number  :min  :max 限制范围;:step为步进，如果step-strictly严格步进，那么输入也要为步进的倍数;:precision控制数值精度</p>
    <el-input-number v-model="numR" :min="1" :max="10" />
    <h2>文本域</h2>
    <p>
      用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的
      textarea 元素。
    </p>
    <p>
      设置文字输入类型的 autosize 属性使得根据内容自动调整的高度。可以给 autosize
      提供一个包含有最大和最小高度的对象，让输入框自动调整。
    </p>

  </div>
</template>
