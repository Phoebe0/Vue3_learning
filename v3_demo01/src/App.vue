<script setup>
// vue3中 钩子函数是有一些改变的

import { onMounted } from 'vue';

/* 
  1. beforeCreate 和 created两个钩子函数 ----> setup函数
  2. beforeMount mounted beforeUpdate updated 这四个钩子函数  ----> 加前缀 on
  3. beforeDestroy ----> onBeforeUnmount
  4. destroyed ----> onUnmounted
*/
  console.log(document.querySelector('h1'))
onMounted(() => {
  console.log(document.querySelector('h1'))
  
})

</script>
<template>
  <h1>标题</h1>
</template>
<style></style>