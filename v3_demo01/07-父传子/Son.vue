<script setup>
// 子组件defineProps
const props = defineProps({
  money: {
    type: Number, 
    default: 0
  }
})
console.log(props.money);
</script>
<template>
  <div class="son">
    子组件 --- {{money}}
  </div>
</template>
<style>
.son{
  border: 3px solid #ccc;
  padding: 10px;
  box-shadow: 0 5px 5px 5px #ccc;
}
</style>