// 1. 导入defineStore
import {defineStore} from 'pinia'
import tooglesStore from './toggles'
// 2. 创建仓库导出
export default defineStore('todos',{
  // 获取数据时从本地缓存中获取
  state: () => ({
    list: JSON.parse(localStorage.getItem('todos')) || [],
  }),
  actions: {
    // 删除
    delTodos (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    // 修改单个todos的状态
    changeState (id) {
      const o = this.list.find(item => item.id === id)
      o.done = !o.done
    },
    // 新增
    addTodos (name) {
      if(!name.trim()) return
      this.list.unshift({
          id: +new Date(),
          name,
          done: false,
      })
    },
    // 清除
    clear () {
      this.list = this.list.filter(item => !item.done)
    },
    // 全选反选
    toggleChecked (boo) {
      this.list.forEach(item => item.done = boo)
    }
  },
  getters: {
    // 剩余数量统计
    count () {
      return this.list.filter(item => !item.done).length
    },
    // 是否显示清除按钮
    isShowButton () {
      return this.list.some(item => item.done)
    },
    // 是否显示底部
    isShowFooter () {
      return this.list.length
    },
    // 全选反选
    isAllCheck () {
      if(!this.list.length) return false 
      return this.list.every(item => item.done)
    },
    showList() {
      const useTooglesStore = tooglesStore()
      if(useTooglesStore.activeBtn === 'All') {
        return this.list
      } else if (useTooglesStore.activeBtn === 'Active') {
        return this.list.filter(item => !item.done)
      } else {
        return this.list.filter(item => item.done)
      }
    }
  }
})