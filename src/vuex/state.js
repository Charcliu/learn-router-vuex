const state = {
  // 计数
  count: 0,
  name: 'Chang Lau',
  todoList: [
    {
      name: 'Vue',
      id: 1
    },
    {
      name: 'React',
      id: 2
    },
    {
      name: 'Angular',
      id: 3
    }
  ]
}

export default state

// 单一状态树，唯一数据源，Vuex 的状态存储是响应式
// 从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
// 每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM
// mapState 辅助函数
// 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
// 为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
// 获取state的两种方式 直接使用this.$store.state获取，使用mapState辅助函数
