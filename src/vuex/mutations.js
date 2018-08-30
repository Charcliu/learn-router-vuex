export const increment = state => {
  state.count++
}

// 提交载荷（Payload）也就是传递额外参数
export const incrementWithPayLoad = (state, num) => {
  state.count += num
}

// 对象风格提交方式
export const incrementWithObjStyle = (state, payload) => {
  state.count += payload.num
}

// 对象风格提交方式
export const INCREMENT_ASYNC_TRUE = (state, payload) => {
  // 异步更新会造成状态不可追踪
  setTimeout(() => {
    state.count += payload.num
  }, 10000)
}

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 通过store.commit提交mutation
// 同步函数！！！

// 调用方式
// 通过commit
// this.$store.commit({
//   type: 'incrementWithObjStyle',
//   num: 20
// })
// 通过辅助函数
// ...mapMutations([
//   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

//   // `mapMutations` 也支持载荷：
//   'incrementWithObjStyle' // 将 `this.incrementWithObjStyle(amount)` 映射为 `this.$store.commit('incrementWithObjStyle', amount)`
// ]),
// this.increment()
// mutation 中混合异步调用会导致你的程序很难调试，mutation 都是同步事务
