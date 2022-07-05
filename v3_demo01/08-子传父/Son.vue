<script setup>
// 子组件defineProps
const props = defineProps({
  money: {
    type: Number, 
    default: 0
  }
})
console.log(props.money)

// 子传父
// 1. 子组件绑定事件
// 2. 子组件通知父组件 defineEmits(['自定义事件类型'])
const emit = defineEmits(['subMoney'])
const subMoney = () => {
  emit('subMoney', 10)
}
</script>
<template>
  <div class="son">
    子组件 --- {{money}}
    <button @click="subMoney">花钱</button>
  </div>
</template>
<style>
.son{
  border: 3px solid #ccc;
  padding: 10px;
  box-shadow: 0 5px 5px 5px #ccc;
}
</style>