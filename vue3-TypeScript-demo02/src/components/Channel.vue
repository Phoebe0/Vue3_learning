<script lang="ts" setup>
import useStore from '../store/index'
const {channels}  = useStore()
// 触发频道的action 获取频道列表
channels.getChannels()

</script>

<template>
  <ul class="catagtory">
   <li 
   :class="{select: item.id === channels.activeId}" 
   v-for="item in channels.channelsList" 
   :key="item.id"
   @click="channels.changeActive(item.id)"
   >
   {{item.name}}
   </li>
  </ul>
</template>

<style scoed lang="less"></style>