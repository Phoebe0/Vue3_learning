<script setup>
import useStore from '../store'
const { todos } = useStore()
// 仓库中数据发生变化，触发 $subscribe
todos.$subscribe (() => {
  localStorage.setItem('todos', JSON.stringify(todos.list))
})

</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="todos.isAllCheck" @change="todos.toggleChecked(!todos.isAllCheck)"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
     <li
       :class="{ completed: item.done }"
       v-for="item in todos.showList"
       :key="item.id"
     >
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
