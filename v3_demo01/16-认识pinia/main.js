import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router/index'
// 导入pinia
import {createPinia} from 'pinia'
// 创建pinia实例
const pinia = createPinia()

// 挂载
createApp(App)
.use(router)
.use(pinia)
.mount('#app')
