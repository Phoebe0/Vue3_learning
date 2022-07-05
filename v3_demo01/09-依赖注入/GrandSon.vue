<script setup>
// 子孙后代组件，可以直接访问父组件暴露的数据 

import { inject } from 'vue';

//     接收：inject 直接接受祖先组件暴露的数据方法
const baby = inject('baby')
const handleChange = inject('handleChange') 
</script>
<template>
  <div class="sun">
    孙子组件 --- {{baby}}
    <button @click="handleChange(999)">把金条换成money</button>
  </div>
</template>
<style>
.sun {
  border: 3px solid #ccc;
  padding: 10px;
  box-shadow: 0 5px 5px 5px #ccc;
}
</style>