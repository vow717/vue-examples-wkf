import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import.meta.env.DEV && (await import('@/mock/index'))
//import('@/mock/index')
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
