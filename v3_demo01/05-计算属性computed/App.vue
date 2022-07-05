<script setup>
import { computed, ref } from 'vue'
const age = ref(22)
// vue3中的计算属性是函数
const addAge = computed(() => {
  return +age.value + 1
})
// 计算属性默认是只读的，如果要修改计算属性，需要写成完整写法
const subAge = computed({
  get () {
    return age.value - 1
  },
  set(val) {
    console.log(val) // 修改计算属性的值
    age.value = +val + 1
  }
})
</script>
<template>
  <div>去年你多大了？ <input type="text" v-model="subAge"></div>
  <div>今年你多大了？ <input type="text" v-model="age"></div>
  <div>明年你多大了？{{addAge}}</div>
</template>
<style></style>