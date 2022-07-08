// 1. 导入defineStore
import {defineStore} from 'pinia'
// 2. 创建仓库导出
export default defineStore('todos',{
  state() {
    return {
      list: [
        {
          id: 1,
          name: '吃饭',
          done: false,
        },
        {
          id: 2,
          name: '睡觉',
          done: true,
        },
        {
          id: 3,
          name: '打豆豆',
          done: false,
        },
      ],
    }
  },
  actions: {},
  getters: {}
})
// 3. 