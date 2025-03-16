<script setup lang="ts">
const props = defineProps<{ data: string }>()
const emits = defineEmits<{ (e: 'ChangeChoice', data: string): void }>()
</script>
<template>
  <div>
    <button @click="emits('ChangeChoice', 'all')" :class="props.data == 'all' ? 'actived' : null">
      全部
    </button>
    <button
      @click="emits('ChangeChoice', 'finish')"
      :class="props.data == 'finish' ? 'actived' : null">
      已完成
    </button>
    <button
      @click="emits('ChangeChoice', 'unfinish')"
      :class="props.data == 'unfinish' ? 'actived' : null">
      未完成
    </button>
  </div>
</template>

<style scoped>
.actived {
  box-shadow: 10%;
}
</style>
