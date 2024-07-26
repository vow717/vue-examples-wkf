<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <table v-if="jsonData.length">
      <thead>
        <tr>
          <th v-for="(value, key) of jsonData[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) of jsonData" :key="rowIndex">
          <td v-for="(value, key) of row" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import * as XLSX from 'xlsx'
import { ref } from 'vue'
const jsonData = ref([])

const handleFileChange = async (event) => {
  const file = event.target.files[0] // 获取用户选择的文件
  const data = await readFileAsync(file) // 读取文件内容
  const workbook = XLSX.read(data, { type: 'array' }) // 使用 xlsx 库以 array 解析数据

  const firstSheetName = workbook.SheetNames[0] // 获取第一个工作表名称
  const worksheet = workbook.Sheets[firstSheetName] // 获取第一个工作表内容

  jsonData.value = XLSX.utils.sheet_to_json(worksheet) // 将工作表内容转换为 JSON 格式

  console.log(jsonData.value) // 在控制台打印 JSON 数据
}

// 异步读取文件内容
const readFileAsync = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader() // 创建 FileReader 实例
    reader.readAsArrayBuffer(file) // 读取文件内容为 ArrayBuffer
    reader.onload = () => resolve(reader.result) // 成功读取时返回数据
  })
}
</script>
