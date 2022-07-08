import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import './styles/base.css'
import './styles/index.css'

const pinia = createPinia()
createApp(App)
.use(pinia)
.mount('#app')
