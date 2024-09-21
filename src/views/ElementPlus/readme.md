# Element-Plus

中文网址：
https://element-plus.org/zh-CN/

## 快速使用

### NPM安装

npm install element-plus --save

### 导入

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

### 开始使用
