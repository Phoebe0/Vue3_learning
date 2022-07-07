<script setup>
// 导入模块，调用即可使用
import useStore from '../store/index'
import {storeToRefs} from 'pinia'
const {user, goods}  = useStore()

const {userInfo, address, tel} = storeToRefs(user)

</script>
<template>
<div>
  Home页面组件
  <!-- 使用的时候，直接  模块名.属性名 -->
  <p>用户信息：{{userInfo}}</p>
  <p>住址：{{address}}</p>
  <p>手机号： {{tel}} <button @click="user.changeTel">改手机号</button> </p>
  <button @click="user.addAge">加年龄</button> 
  <button @click="user.waitAddAge(10)">等两秒再加10岁</button>
  <p>商品： {{goods.goodsInfo.name}} -- {{goods.goodsInfo.price}}
  <button @click="goods.subPrice">减价并加年龄</button>
  </p>

</div>
</template>
<style>
p {
  box-shadow: 0 5px 5px 5px #999;
}
</style>