<script setup>
import Son from './Son.vue'
import { provide, ref } from 'vue';
const baby = ref('金条')
// 在父组件中暴露数据
// 父组件中不仅可以暴露数据，也可以暴露方法
const handleChange = (val) => {
  baby.value = val
}
provide('baby', baby)
provide('handleChange', handleChange)
// 依赖注入的使用场景？
// 涉及到跨层级组建的通信
// 语法： 父组件暴露，子孙组件接收
</script>
<template>
<div class="father">
  父组件
  <Son></Son>
</div>
</template>
<style>
.father {
  border: 3px solid #ccc;
  padding: 10px;
  box-shadow: 0 5px 5px 5px #ccc;
}
</style>