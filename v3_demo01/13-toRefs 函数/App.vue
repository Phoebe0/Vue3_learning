<script setup>
import { ref, toRefs } from 'vue'
// 如果对一个响应数据进行解构或者展开，会丢掉他的响应特性

// 解决方案： 1. 不解构 2. toRefs()
const person = ref({
  name: '张三',
  age: 18
})
// 解构person对象后，导致person的响应特性丢失
// toRefs() 可以解决这个问题
let {name, age} = toRefs(person.value)
// 修改姓名
const changeName = () => {
  name.value = '李四'
}
// 修改年龄
const changeAge = () => {
  age.value = 20
}
</script>
<template>
  <div>{{person.name}} --- {{person.age}}</div>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>
<style></style>