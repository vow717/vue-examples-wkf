<script setup lang="ts">
import { ref } from 'vue'

const tasksR = ref<{ id: number; name: string; done: boolean }[]>([
  { id: 0, name: 'task1', done: true }
])
const newTesk = ref('')

let idNum = 1
const AddF = () => {
  if (newTesk.value) {
    tasksR!.value.push({ id: idNum, name: newTesk.value, done: false })
    idNum++
    newTesk.value = ''
  }
}
const editList = ref<number[]>([])
const startEdit = (id: number) => {
  editList.value.push(id)
}
const saveF = (id: number) => {
  editList.value = editList.value.filter((editId) => editId !== id)
}

const delF = (id: number) => {
  editList.value = editList.value.filter((editId) => editId !== id)
  tasksR.value = tasksR.value.filter((task) => task.id !== id)
}
</script>
<template>
  <div>
    <h2>Day off in Kyoto(2)</h2>

    <input type="text" v-model="newTesk" placeholder="Add task" />
    <button @click="AddF">Add</button>

    <p v-for="task in tasksR" :key="task.id">
      <input type="checkbox" v-model="task.done" />

      <template v-if="editList.indexOf(task.id) == -1">
        {{ task.name }}
        <button @click="startEdit(task.id)">Edit</button>
      </template>

      <template v-if="editList.indexOf(task.id) !== -1">
        <input type="text" v-model="task.name" />
        <button @click="saveF(task.id)">Save</button>
      </template>

      <button @click="delF(task.id)">Delete</button>
    </p>
  </div>
</template>
