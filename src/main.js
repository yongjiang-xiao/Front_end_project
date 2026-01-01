import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import './assets/css/global.css'

const app = createApp(App)

// 使用路由和状态管理
app.use(router)
app.use(store)

// 全局属性
app.config.globalProperties.$filters = {
  // 可以在这里添加全局过滤器
}

// 挂载应用
app.mount('#app')