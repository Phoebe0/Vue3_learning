<!-- 
  script setup语法
  要使用这个语法，需要将 setup attribute 添加到 <script> 代码块上
  顶层的绑定会自动暴露给模板，所以定义的变量，函数和import导入的内容都可以直接在模板中直接使用
-->
<script setup>
import { ref } from 'vue'
  let money = ref(10000)
  const a = 1
  const b = 2
  const addMoney = () => {
    money.value += 100
  }
</script>

<template>
  <div>{{money}} <button @click="addMoney">挣大钱</button></div>
  <hr>
  <div>{{a}}</div>
  <hr>
  <div>{{b}}</div>
</template>