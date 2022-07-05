<script setup>
import { ref } from 'vue'
import Son from './Son.vue'
const money = ref(100)
const subMoney = (n) => {
  money.value -= n 
}
</script>
<template>
  <div class="father">
    我是父组件
    <Son :money="money" @subMoney="subMoney"></Son>
  </div>
</template>
<style>
.father {
  border: 1px solid #999;
  padding: 10px;
}
</style>