import {defineStore} from 'pinia'
import axios from 'axios'
import {IListItemType, IListType} from '../../types/data'
export default defineStore('articleList', {
  state () {
    return {
      articleList: [] as IListItemType[]
    }
  },
  actions: {
    // 获取文章列表
    async getArticleList (id :number) {
      const res = await axios.get<IListType>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${+new Date()}`)
      this.articleList = res.data.data.results
      
    }
  },
  getters: {}
})