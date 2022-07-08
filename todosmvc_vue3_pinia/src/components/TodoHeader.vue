<script setup>
import { ref } from 'vue';
import useStore from '../store'
const { todos } = useStore()
const name = ref('')
const add = () => {
  todos.addTodos(name.value)
  // 清空
  name.value = ''
}

</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input 
    v-model="name" 
    class="new-todo" 
    placeholder="What needs to be done?" 
    autofocus
    @keyup.enter="add"
    />
  </header>
</template>

<style lang="less" scoped></style>
