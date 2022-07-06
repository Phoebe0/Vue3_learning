<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref, watch } from 'vue'
// 1. 定义数据
const todoList = ref(JSON.parse(localStorage.getItem('todoList')) || [])
// 2. 父传子传递给main v-for渲染
// 修改单个todo的状态
const changeTodoState = id => {
  // console.log(id)
  // 拿着id在todoList数组中查找  并取反
 const obj = todoList.value.find(item => item.id === id)
 obj.isDone = !obj.isDone
}
// 删除 拿着id找索引, 截取  || 过滤
const delTodo = id => {
  // const index = todoList.value.findIndex(item => item.id === id)
  // // 截取
  // todoList.value.splice(index, 1)
  // 过滤
  todoList.value = todoList.value.filter(item => item.id !== id)
}
// 添加
const addTodo = (name) => {
  todoList.value.unshift({
    id: Date.now(),
    name,
    isDone: false
  })
}

// 清除已完成
const clear = () => {
  // 保留 isDone为false
 todoList.value = todoList.value.filter(item => !item.isDone)
}

// 统一控制所有item的isDone
const changeAllState = val => {
  todoList.value.forEach(item => item.isDone = val)
}

// 侦听器 侦听数据的变化 持久化存储
watch(() => todoList.value, (val)=> {
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
},{deep: true})
</script>

<template>
  <section class="todoapp">
    <TodoHeader @addTodo="addTodo"></TodoHeader>
    <TodoMain 
    :todoList="todoList" 
    @changeTodoState="changeTodoState"
    @delTodo="delTodo"
    @changeAllState="changeAllState"
    ></TodoMain>
    <TodoFooter :todoList="todoList" @clear="clear"></TodoFooter>
  </section>
</template>

<style></style>
