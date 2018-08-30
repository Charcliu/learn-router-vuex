export const getUpName = state => state.name.toUpperCase()

// getters接受第二个参数为getters
export const getUpNameWithCount = (state, getters) =>
  getters.getUpName + state.count

// 通过方法访问
export const getTodo = state => id => {
  return state.todoList.find(todo => todo.id === id)
}

// 从 store 中的 state 中派生出一些状态
// 像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计
// 访问方式
// 1. 通过computed属性访问
// 2. 通过方法访问
//   getTodo() {
//     return this.$store.getters.getTodo(2)
//   }
// 3. 通过辅助函数mapGetters访问
// ...mapGetters(['getUpName', 'getUpNameWithCount']),
