import { defineStore } from 'pinia'
export default defineStore('toggles', {
  state () {
    return {
      btns: ['All', 'Active', 'Compelted'],
      activeBtn: 'All'
    }
  },
  actions: {
    changeActive(str) {
      this.activeBtn = str
    }
  },
  getters: {}
})