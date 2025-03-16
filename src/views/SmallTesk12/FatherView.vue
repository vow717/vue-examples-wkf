<script setup lang="ts">
import { ref } from 'vue'
import AddComponent from './AddComponent.vue'
import ListComponent from './ListComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
const ListDataR = ref<{ name: string; isFinished: boolean }[]>([])
const choiceR = ref<string>('all')
const ChangeChoiceF = (choice: string) => {
  choiceR.value = choice
}
ListDataR.value = [
  { name: '打球', isFinished: false },
  { name: '上网', isFinished: true },
  { name: '吃饭', isFinished: false }
]

const addlistF = (data: { name: string; isFinished: boolean }) => {
  ListDataR.value.push(data)
}
const EditListF = (data: { name: string; isFinished: boolean }) => {
  ListDataR.value.forEach((d) => {
    if (d.name == data.name) {
      d.isFinished = !d.isFinished
    }
  })
}
</script>
<template>
  <div class="todolist">
    <h1>ToDOList</h1>
    <div>
      <AddComponent :data="ListDataR" @AddList="addlistF" />
      <ListComponent :data="ListDataR" :choice="choiceR" @EditList="EditListF" />
      <ButtonComponent :data="choiceR" @ChangeChoice="ChangeChoiceF" />
    </div>
  </div>
</template>

<style scoped>
.todolist {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
