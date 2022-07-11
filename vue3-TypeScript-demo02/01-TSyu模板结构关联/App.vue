<script lang="ts" setup>
import {ref} from 'vue'

// ts与模板结构关联
// 1. 创建空的ref
// 2. 和模板结构关联
// 3. 使用
const hRef = ref<null | HTMLHeadingElement>(null)
const fn = () => {
  // 如果对象可能为null，则ts语法会报错
  // 1. 加if判断
  // if(hRef.value) {
  //   console.log(hRef.value.innerHTML)
  //   hRef.value.innerHTML = '111'
  // }
  // 2. 使用可选链操作符
  console.log(hRef.value?.innerHTML)
  // hRef.value?.innerHTML = '111' // 使用 ?.  访问的属性只能读取，不能赋值
  // 3. 非空断言
  // 注意：非空断言一定要确保有该属性才能使用，不然使用非空断言会导致bug
  // 明确告诉ts hRef.value一定是存在的， !. 如果结构中没有h2元素，ts也不会校验
  console.log(hRef.value!.innerHTML)
  hRef.value!.innerHTML = '111' // 使用 !.  访问的属性既能读取，也能赋值
  
}
</script>
<template>
<h2 ref="hRef">我是标题</h2>
<button @click="fn">按钮操作标题</button>
</template>
<style></style>