<template>
  <div id="app">
    根组件---{{str}}
    <hr>
    <button @click="sayHi">hello</button>
  </div>
</template>

<script>
export default {
  // composition api的使用，需要配置setup函数
  /* 
    1. setzaiup函数是一个新的组件选项，作为组件中compositionAPI的起点入口
    2. 从生命周期角度来看，setup会在beforeCreate钩子函数之前执行
    3. setup中不能使用this，this指向undefined
    4. 所有的属性方法都写在setup函数中，在模板中需要使用的数据和函数，需要在setup中返回
  */
 setup() {
  console.log('setup函数执行啦',this)
  const str = '哈哈'
  const sayHi = () => {
    console.log('HelloVue3World')
  }
  return {
    str,
    sayHi
  }
 }

}
</script>

<style>

</style>