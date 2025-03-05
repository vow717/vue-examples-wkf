<script setup lang="ts">
import { ref } from 'vue'

const tasksR = ref<{ order: string; name: string }[]>([{ order: 'Edit', name: 'task1' }])
const newTesk = ref('')

const AddF = () => {
  if (newTesk.value) {
    tasksR!.value.push({ order: 'Edit', name: newTesk.value })
    newTesk.value = ''
  }
}

const startEdit = (index: number) => {
  tasksR.value[index].order = 'Save'
}
const saveF = (index: number) => {
  tasksR.value[index].order = 'Edit'
}
</script>
<template>
  <div>
    <h2>Day off in Kyoto</h2>
    <input type="text" v-model="newTesk" placeholder="Add task" />
    <button @click="AddF">Add</button>
    <ul>
      <li v-for="(task, index) in tasksR" :key="index">
        <template v-if="task.order == 'Edit'">{{ task.name }}</template>
        <button @click="startEdit(index)" v-if="task.order == 'Edit'">Edit</button>

        <template v-if="task.order == 'Save'">
          <input type="text" v-model="tasksR[index].name" />
        </template>
        <button @click="saveF(index)" v-if="task.order == 'Save'">Save</button>

        <button @click="tasksR!.splice(index, 1)">Delete</button>
      </li>
    </ul>
  </div>
</template>
