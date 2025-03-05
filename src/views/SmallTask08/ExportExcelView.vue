<script setup lang="ts">
import * as XLSX from 'xlsx'
const datalist = [
  {
    id: 1,
    name: '萧炎',
    age: 21,
    account: 15032623621,
    skill: '毁灭火莲',
    gender: '男'
  },
  {
    id: 2,
    name: '萧薰儿',
    age: 20,
    account: 15032628986,
    skill: '帝印决',
    gender: '女'
  },
  {
    id: 3,
    name: '药老',
    age: 25,
    account: 16632623621,
    skill: '炼丹',
    gender: '男'
  },
  {
    id: 4,
    name: '小医仙',
    age: 18,
    account: 17732623621,
    skill: '天阴毒手',
    gender: '女'
  },
  {
    id: 5,
    name: '美杜莎',
    age: 20,
    account: 18832623621,
    skill: '千钧引雷',
    gender: '女'
  }
]
const downloadExcel = () => {
  // 从Vue组件的datalist数据
  // const data = datalist
  //也可以.map修改数据，将中文字段映射为英文字段
  const data = datalist.map((item) => ({
    序号: item.id,
    姓名: item.name,
    年龄: item.age,
    账号: item.account,
    技能: item.skill,
    性别: item.gender
  }))
  // 将JSON格式的数据转换为工作表(worksheet)
  // XLSX.utils.json_to_sheet()方法接受一个数组，其中每个元素是一个对象，代表Excel中的一行
  // 这里的data变量应该是一个数组，数组中的每个对象包含将要写入Excel的行数据
  const worksheet = XLSX.utils.json_to_sheet(data)

  // 创建一个新的工作簿(workbook)
  // 工作簿是Excel文件中的顶级容器，可以包含多个工作表
  const workbook = XLSX.utils.book_new()

  // 将工作表添加到工作簿中
  // 'Sheet1'是工作表的名称，你可以根据需要修改它
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

  // 将工作簿保存为Excel文件，并触发下载
  // 'data.xlsx'是导出的文件名，你可以根据需要修改它
  // 这个方法会生成一个.xlsx文件，并提示用户下载
  XLSX.writeFile(workbook, 'data.xlsx')
}
</script>
<template>
  <div>
    <el-button @click="downloadExcel()" type="info" style="float: right; padding: 10px 15px">
      导出Excel
    </el-button>
  </div>
</template>
