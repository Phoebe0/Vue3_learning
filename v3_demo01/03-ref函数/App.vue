<template>
  <div id="app">
    <div>{{ num }}</div>
    <button @click="changeNum">改值</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  /* 
    reactive 处理的数据, 必须是复杂类型,  如果是简单类型无法处理成响应式, 所以有 ref 函数!

    作用: 对传入的数据（一般简单数据类型），包裹一层对象,  转换成响应式。

    1. ref 函数接收一个的值, 返回一个ref 响应式对象,  有唯一的属性 value
    2. 在 setup 函数中, 通过 ref 对象的 value 属性, 可以访问到值
    3. 在模板中, ref 属性会自动解套, 不需要额外的 .value
    4. ref函数也支持传入复杂类型，传入复杂类型，也会做响应式处理

  */
 setup() {
  // 简单数据类型
  let num = ref(1000)
  console.log(num)
  console.log(num.value) // 访问值 .value
  const changeNum = () => {
    num.value ++
  }
  return {
    num,
    changeNum
  }
 }

}
</script>

<style>

</style>