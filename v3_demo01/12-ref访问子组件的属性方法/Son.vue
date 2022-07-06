<script setup>
  const sayHi = () => {
    console.log('👁‍🗨,子组件方法')
  }

  const num = 100
  // 如果子组件的数据， 方法，允许被父组件通过ref调用，需要将数据 ， 方法暴露出来
  defineExpose({
    sayHi,
    num
  })
</script>
<template>
<h3>子组件</h3>
</template>
<style></style>