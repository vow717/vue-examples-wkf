<script setup lang="ts">
import { ref } from 'vue'
const colorR1 = ref()
const colorR2 = ref()

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date()
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>
<template>
  <div>
    <h2>Checkbox多选框</h2>
    <p>el-checkbox-button可以实现按钮的多选框</p>
    <p>用法和checkbox差不多，多些好看的UI画面</p>

    <h2>Color Picker取色器</h2>
    <p>el-color-picker 就行，用v-model绑定选的颜色数据</p>
    <el-color-picker v-model="colorR1" />
    <p>想要外加透明度选择，直接在后面加一个show-alpha</p>
    <el-color-picker v-model="colorR2" show-alpha />

    <h2>Date日期时间选择器</h2>
    <p>el-date-picker type="date"就可以得到一个时间选择器</p>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    <p>
      :shortcuts可以配置快捷选项，如一个星期前的日期，可以直接选。 只需要 :shortcuts="shortcuts"
      自己const shortcuts=[{text:'标签名',value:对应的date时间}]
    </p>
    <p>
      :disabled-date可以通过函数，禁止掉不给选的日期。如我们不准选比今天更晚的，就是:shortcuts="shortcuts"，const
      disabledDate = (time: Date) => { return time.getTime() > Date.now() }
    </p>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :shortcuts="shortcuts"
      :disabled-date="disabledDate" />
    <p>其他日期方式，如type="week" type="year"也可以，而且如果type="dates/weeks/years"。</p>

    <p>如果想要选择一个时间段type="daterange"</p>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="到"
      start-placeholder="Start date"
      end-placeholder="End date" />
    <p>日期格式</p>
    <p>format="YYYY/MM/DD" 为显示的日期格式，value-format="YYYY/MM/DD"为接收的格式</p>
    <p>具体格式说明看：https://day.js.org/docs/en/display/format#list-of-all-available-formats</p>
    <p>:prefix-icon可以加前缀。</p>
    <p>:prefix-icon="customPrefix",然后要用shallowRef创个customPrefix，用到再说</p>

    <h2>日期时间选择题</h2>
    <p>type="datetime",用法和date差不多的</p>
  </div>
</template>
