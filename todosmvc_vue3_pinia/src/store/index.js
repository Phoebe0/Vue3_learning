import useTodosStore from './modules/todos'

const useStore = () => {
  return {
    todos: useTodosStore()
  }
}

export default useStore