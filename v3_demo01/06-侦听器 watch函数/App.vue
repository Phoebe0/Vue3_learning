<script setup>
import { ref, watch } from 'vue'
// 侦听器 函数
/* 
  watch(参数1，参数2， 参数3)
  1. 参数1 是侦听的数据
  2. 参数2 是回调函数，侦听的数据发生变化，会出发函数，函数中可以获取到最新的值
  3. 参数3 是一个配置对象，立即侦听 深度侦听 immediate: true deep: true
*/
const money = ref(99)
const cutMoney = () => {
  money.value --
}
const num = ref(888)
const changeNum = () => {
  num.value ++
}
// 侦听多个属性的变化：不论是num变了，还是money变了，都要输出
watch([money, num], (values) => {
  console.log('数据变化了', values)
})
// 侦听复杂数据类型
const person = ref({ // {value: {name: 'Tt', age: 22}}
  name: 'Tt',
  age: 22
})
const addAge = () => {
  person.value.age ++
}
watch(() => person.value.age, (newVal) => {
  console.log('最新的年纪', +newVal)
})
</script>
<template>
  <div>{{money}} <button @click="cutMoney">cutMoney</button></div>
  <div>{{num}} <button @click="changeNum">changeNum</button></div>
  <div>{{person.name}} --- {{person.age}} <button @click="addAge">加年龄</button></div>
</template>
<style></style>