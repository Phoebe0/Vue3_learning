<script setup>
import useStore from '../store'
const { todos, toggles } = useStore()
</script>

<template>
  <footer class="footer" v-if="todos.isShowFooter">
    <span class="todo-count"><strong>{{todos.count}}</strong> 个剩余任务</span>
    <ul class="filters">
      <li v-for="(item,index) in toggles.btns" :key="index" @click="toggles.changeActive(item)">
        <a :class="{selected: item === toggles.activeBtn}" href="#/">{{item}}</a>
      </li>
    </ul>
    <button class="clear-completed" v-if="todos.isShowButton" @click="todos.clear">清空已完成的任务</button>
  </footer>
</template>

<style lang="less" scoped></style>
