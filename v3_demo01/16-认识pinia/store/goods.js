// 导入定义仓库的方法
import {defineStore} from 'pinia'
// 导入user模块
import useUserStore from './user'
const user = useUserStore()
// 定义仓库并导出
export default defineStore('goods', {
  state() {
    return {
      goodsInfo: {
        name: 'MacBook Pro 2019',
        price: 20499,
        weight: '1.3kg'
      }
    }
  },
  actions: {
    // 减价并加年龄
    subPrice () {
      // 调用user模块的方法
      user.addAge()
      this.goodsInfo.price -= 100
    }
  },
  getters: {}
})