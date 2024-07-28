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
  const file = event.target.files[0]
  jsonData.value = await parseExcelFile(file)
}

// 解析Excel文件并返回封装后的JSON数据
const parseExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const data = reader.result
      const workbook = XLSX.read(data, { type: 'array' })
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      const rawJsonData = XLSX.utils.sheet_to_json(worksheet)

      // 对数据进行封装处理
      const formattedData = rawJsonData.map((row) => ({
        // 创建一个新对象，并将原始对象中的中文字段映射为新的英文字段
        id: row['#'] || '',
        account: row['账号'] || '',
        name: row['姓名'] || '',
        quantity: row['数量'] || '',
        group: row['组'] || '',
        groupA: row['A组'] || '',
        groupB: row['B组'] || '',
        groupC: row['C组'] || ''
      }))

      resolve(formattedData)
    }
    reader.onerror = (error) => reject(error)
  })
}
</script>
