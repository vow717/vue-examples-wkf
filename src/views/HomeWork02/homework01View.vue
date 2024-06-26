<script setup lang="ts">
import { ref } from 'vue'
const daysR = ref([false, false, false, false, false, false, false])
const weekendsR = ref(false)
const weekdaysR = ref(false)
const updateDaysR = (type: string) => {
  if (type === 'work') {
    for (let i = 0; i < 5; i++) {
      daysR.value[i] = weekdaysR.value
    }
  } else {
    for (let i = 5; i < 7; i++) {
      daysR.value[i] = weekendsR.value
    }
  }
}
const updateWeekR = () => {
  weekdaysR.value = daysR.value.slice(0, 5).every((day) => day)
  weekendsR.value = daysR.value.slice(5, 7).every((day) => day)
}
</script>
<template>
  <div>
    <label>
      |
      <input type="checkbox" v-model="weekdaysR" @change="updateDaysR('work')" />
      工作日
    </label>
    <label>
      |
      <input type="checkbox" v-model="weekendsR" @change="updateDaysR('break')" />
      休息日
    </label>
  </div>
  <div>
    <label v-for="(v, index) of daysR" :key="index">
      |
      <input type="checkbox" v-model="daysR[index]" @change="updateWeekR()" />
      周{{ index + 1 }}
    </label>
  </div>
</template>
