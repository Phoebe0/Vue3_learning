// 导出一个函数 函数体返回一个对象
import useUserStore from './modules/user'
import useGoodsStore from './modules/goods'
const useStore = () => {
  return {
    user: useUserStore(),
    goods: useGoodsStore()
  }
}

export default useStore
