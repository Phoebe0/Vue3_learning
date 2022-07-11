<script lang="ts" setup>
import { watch } from 'vue';
import useStore from '../store/index'
const {articles, channels}  = useStore()
watch(() => channels.activeId, () => {
  articles.getArticleList(channels.activeId)
}, {immediate: true})
</script>

<template>
  <div class="list">
    <div class="article_item" v-for="item in articles.articleList" :key="item.art_id">
      <h3 class="van-ellipsis">{{item.title}}</h3>
      <div class="img_box">
        <img
         
          :src="item.cover?.images?.[0] || 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F17%2F20150817091657_VPFGL.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660122226&t=d00d62e6d5fd6062140f92ebf7878ee3'"
          class="w100"
          alt=""
        />
      </div>
      <div class="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>