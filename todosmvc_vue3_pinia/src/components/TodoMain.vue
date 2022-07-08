<script setup>
import useStore from '../store'
const { todos } = useStore()
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in todos.list" :key="item.id" :class="{completed: item.done}">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todos.changeState(item.id)"/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="todos.delTodos(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
