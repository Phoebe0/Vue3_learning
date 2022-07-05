<template>
  <div id="app">
    <div>{{person.name}}---{{person.age}} <button @click="addAge">长一岁</button> </div>
    <div>{{obj.num}} <button @click="addNum">数字加</button> </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  /* 
    1. setup 需要有返回值, 只有返回的值才能在模板中使用
    2. 默认普通的数据, 不是响应式的
    将 复杂数据类型转化为响应式数据，使用reactive函数
  */
 setup() {
  // 复杂数据类型
  const person = reactive({
    name: 'Tt',
    age: 22
  })
  const addAge = () => {
    person.age ++
  }
  // 如果是简单数据类型，则需要转为复杂数据类型再使用reactive
  let obj = reactive({num: 100})
  const addNum = () => {
    obj.num ++
  }
  return {
    person,
    obj,
    addAge,
    addNum
  }
 }

}
</script>

<style>

</style>