import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import.meta.env.DEV && (await import('@/mock/index'))
import { createAlertDialog } from '@/components/message/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import('@/mock/index')
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

app.config.errorHandler = (err) => {
  const message = err as string
  console.error(message)
  createAlertDialog(message)
}
