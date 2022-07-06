<script setup>
import { ref } from 'vue'
const name = ref('')
const emit = defineEmits(['addTodo'])
// 添加
const addTodo = ()=> {
  if(!name.value) return alert('请输入要新增的todo')
  // 通知父组件新增
  emit('addTodo', name.value)
  // 清空输入框
  name.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input 
    class="new-todo" 
    placeholder="What needs to be done?" 
    autofocus 
    v-model.trim="name"
    @keyup.enter="addTodo"
    />
  </header>
</template>

<style lang="less" scoped></style>
