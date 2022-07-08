import useTodosStore from './modules/todos'
import useTogglesStore from './modules/toggles'

const useStore = () => {
  return {
    todos: useTodosStore(),
    toggles: useTogglesStore()
  }
}

export default useStore