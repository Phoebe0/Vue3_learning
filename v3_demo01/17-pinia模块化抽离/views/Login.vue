<script setup>
// 导入index.js文件
import useStore from '../store/index'
const {user, goods}  = useStore()
</script>
<template>
  <p>{{user.userInfo}}</p>
</template>
<style>
p {
  box-shadow: 0 5px 5px 5px #999;
}
</style>