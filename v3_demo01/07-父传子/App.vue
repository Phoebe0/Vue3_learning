<script setup>
import { ref } from 'vue'
import Son from './Son.vue'
const money = ref(100)
// 父传子 
// :属性绑定给子组件
// 子组件defineProps接收
// 子组件使用
</script>
<template>
  <div>
    <Son :money="money"></Son>
  </div>
</template>
<style></style>