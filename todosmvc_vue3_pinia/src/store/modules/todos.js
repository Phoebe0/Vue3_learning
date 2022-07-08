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
  actions: {
    // 删除
    delTodos (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    // 修改单个todos的状态
    changeState (id) {
      const o = this.list.find(item => item.id === id)
      o.done = !o.done
    }
  },
  getters: {}
})