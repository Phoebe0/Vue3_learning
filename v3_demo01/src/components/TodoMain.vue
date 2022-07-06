<script setup>
import { computed } from 'vue';

const props = defineProps({
  todoList: {
    type: Array,
    default: () => [] // props验证 复杂数据类型需要使用工厂函数
  }
})
const emit = defineEmits(['changeTodoState', 'delTodo', 'changeAllState'])
// 修改单个todo的状态
const changeTodoState = id => {
  // 子传父 传递id
  emit('changeTodoState', id)
}
// 删除
const delTodo = id => {
  // 子传父 传递id
  emit('delTodo', id)
}

// 全选反选
const isAllcheck = computed({
  get(){
    return props.todoList.every(item => item.isDone)
  },
  set(val) {
    // console.log(val) // 通知父组件 携带最新的状态, 统一控制所有item项的布尔值 
    emit('changeAllState', val)
  }
})
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAllcheck"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.isDone}" v-for="item in todoList" :key="item.id">
        <div class="view">
          <input 
          class="toggle" 
          type="checkbox" 
          :checked="item.isDone" 
          @change="changeTodoState(item.id)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
