<script setup lang="ts">
import { ref, watch } from 'vue'
const daysR = ref<number[]>([])
const weekendsR = ref(false)
const weekdaysR = ref(false)
const updateDaysR = (type: string) => {
  if (type === 'work') {
    if (weekdaysR.value) {
      for (let i = 1; i <= 5; i++) {
        if (!daysR.value.includes(i)) daysR.value.push(i)
      }
    } else {
      daysR.value = daysR.value.filter((day) => day > 5)
    }
  } else {
    if (weekendsR.value) {
      for (let i = 6; i <= 7; i++) {
        if (!daysR.value.includes(i)) daysR.value.push(i)
      }
    } else {
      daysR.value = daysR.value.filter((day) => day < 6)
    }
  }
}
const updateWeekR = () => {
  weekdaysR.value = [1, 2, 3, 4, 5].every((day) => daysR.value.includes(day))
  weekendsR.value = [6, 7].every((day) => daysR.value.includes(day))
}

watch(
  daysR,
  () => {
    daysR.value.sort((a, b) => a - b)
  },
  { deep: true }
)
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
    <label v-for="index in 7" :key="index">
      |
      <input type="checkbox" v-model="daysR" @change="updateWeekR()" :value="index" />
      周{{ index }}
    </label>
  </div>
  <p>选择情况:{{ daysR }}</p>
</template>
