<script setup>
import { ref } from 'vue';
import Son from './Son.vue';
  // 模板中 ref 的使用 --- ref+组件，调用组件的方法
  /* 
    1. 创建空的Ref对象
    2. 和模板结构关联
    3. 使用
  */
 const sonRef = ref(null)
 const handleClick = () => {
  sonRef.value.sayHi()
  console.log(sonRef.value.num)
 }
</script>
<template>
  <Son ref="sonRef"></Son>
  <button @click="handleClick">提交</button>
</template>
<style></style>