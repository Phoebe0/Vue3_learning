<script setup>
// 编程式导航 从vue2中： this.$router.push()
// vue3中调用useRouter方法
import { useRoute, useRouter } from 'vue-router'
// useRoute: 路由信息对象； useRouter: 路由实例对象
const router = useRouter()
const route = useRoute()

console.log('router', router)
console.log('route', route)
const goLogin = () => {
  router.push('/login')

}
</script>
<template>
<div>
  <h1>Home组件</h1>
  <button @click="goLogin">去登陆</button>
</div>
</template>
<style></style>