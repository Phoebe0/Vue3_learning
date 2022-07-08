import { defineStore } from 'pinia'
export default defineStore('toggles', {
  state () {
    return {
      // 提供按钮选项
      btns: ['All', 'Active', 'Compelted'],
      // 默认选中
      activeBtn: 'All'
    }
  },
  actions: {
    // 点击切换时，切换选中按钮
    changeActive(str) {
      this.activeBtn = str
    }
  },
  getters: {}
})