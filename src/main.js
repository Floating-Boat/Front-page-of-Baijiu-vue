import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './css.css'

const app = createApp(App)

app.use(ElementPlus)



app.use(router) // 将路由器实例应用到 Vue 应用中
app.mount('#app')
