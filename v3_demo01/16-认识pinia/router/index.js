// 导入路由：路由懒加载 例如
// const Home = () => import('../views/Home.vue')


// 1. 创建路由实例
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 2. 配置路由规则
const router = createRouter({
  history: createWebHashHistory(), // history配置模式（hash模式：带#） 
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component:  () => import('../views/Home.vue')},
    {path: '/login', component:  () => import('../views/Login.vue')}
  ]
})
// 3. 导出路由实例
export default router
// 4. 在main.js导入