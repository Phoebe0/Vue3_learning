<script setup>
import { computed } from 'vue'
const props = defineProps({
  todoList: {
    type: Array,
    default: () => [] // props验证 复杂数据类型需要使用工厂函数
  }
})
// 三个计算属性
// 剩余数量统计
const count = computed(()=> {
  // 将isDone为false过滤  得到过滤的数组长度
  return props.todoList.filter(item => !item.isDone).length
})
// 是否显示清除按钮
const isShowBtn = computed(()=> {
  // 检测数组中 是否有一项的isDone是true 返回ture  反之返回false
  return props.todoList.some(item => item.isDone)
})
// 是否显示底部
const isShowFooter = computed(()=> {
  return props.todoList.length
})
const emit = defineEmits(['clear'])
// 清除已完成
const clear = () => {
  emit('clear')
}
</script>

<template>
  <footer class="footer" v-if="isShowFooter">
    <span class="todo-count"><strong>{{ count }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-if="isShowBtn" @click="clear">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
