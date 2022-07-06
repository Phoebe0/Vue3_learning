<script setup>
// 模板中 ref 的使用 --- 获取DOM元素
/* 
  获取模板的元素（dom元素，组件）
    1 创建 ref =>  const hRef = ref(null)
    2 模板中建立关联  =>  <h1 ref="hRef">钩子函数-----123</h1>
    3 使用 => hRef.value
*/
import { ref } from 'vue'
const h1Ref = ref(null)
const handleClick = () => {
  console.log(h1Ref.value) // h1的DOM元素
  h1Ref.value.style.color = 'green'
}

</script>
<template>
  <h1 ref="h1Ref">标题</h1>
  <button @click="handleClick">改变颜色</button>
</template>
<style></style>