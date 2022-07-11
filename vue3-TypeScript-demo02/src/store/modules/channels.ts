import {defineStore} from 'pinia'
import axios from 'axios'
import {IResType, ItemType} from '../../types/data'
export default defineStore('channels', {
  state () {
    return {
      channelsList: [] as ItemType[],
      activeId: 0
    }
  },
  actions: {
    // 获取频道列表
    async getChannels () {
      const res = await axios.get<IResType>('http://geek.itheima.net/v1_0/channels')
      console.log(res.data.data.channels)
      this.channelsList = res.data.data.channels
      
    },
    // 点击切换高亮
    changeActive(activeId: number) {
      this.activeId = activeId
    }
  },
  getters: {}
}) 