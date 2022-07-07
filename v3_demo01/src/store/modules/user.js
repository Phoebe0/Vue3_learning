// 关于用户信息的模块
// 1. 导入defineStore方法
 import {defineStore} from 'pinia'
//  2. 创建仓库
// defineStore(参数 1, 参数 2)
// 参数 1： 唯一的模块标识
// 参数 2：对象 {state, actions, getters}
const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {
        name: 'Tricia',
        age: 19,
        gender: '女'
      },
      address: '上海市',
      tel: 17844577637
    }
  },
  // 不论是同步代码还是异步代码都在actions中定义方法名，都可以直接修改state中的状态
  actions: {
    // 同步代码
    addAge () {
      console.log(this) // this指向模块仓库
      this.userInfo.age ++
    },
    // 异步代码
    waitAddAge (n) {
      setTimeout(() => {
        this.userInfo.age += n
      }, 2000);
  },
  changeTel () {
    this.tel = '+86 10000000000'
  }
},
  getters: {}
})

// 3. 导出仓库
export default useUserStore


