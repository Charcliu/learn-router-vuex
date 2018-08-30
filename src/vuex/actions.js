export const ACTION_INCREMENT = context => {
  setTimeout(() => {
    context.commit('increment')
  }, 2000)
}

// 载荷（传递参数）
export const ACTION_INCREMENT_PAYLAOD = (context, payload) => {
  setTimeout(() => {
    context.commit('incrementWithObjStyle', payload)
  }, 2000)
}

export const ACTION_MODIFY_NAME = ({ commit, state }, payload) => {
  setTimeout(() => {
    commit('MODIFY_NAME', payload)
  }, 2000)
}

// 组合Action
async function ACTION_MODIFY_ALL ({ dispatch, commit }, payload) {
  await dispatch('ACTION_INCREMENT_PAYLAOD', payload)
  await dispatch('ACTION_MODIFY_NAME', payload)
  console.log('exe all')
}

export { ACTION_MODIFY_ALL }

// action 内部可以执行异步
// 接受参数 context类似于store实例对象 和 commit state
// 调用方式
// 第一种
// // 分发Action
// this.$store.dispatch({
//     type: 'ACTION_INCREMENT_PAYLAOD',
//     num: 50
//   })
// 第二种
// ...mapActions([
//     'ACTION_MODIFY_NAME', // 将 `this.ACTION_MODIFY_NAME()` 映射为 `this.$store.dispatch('ACTION_MODIFY_NAME')`

//     // `mapActions` 也支持载荷：
//     'ACTION_INCREMENT_PAYLAOD' // 将 `this.ACTION_INCREMENT_PAYLAOD(amount)` 映射为 `this.$store.dispatch('ACTION_INCREMENT_PAYLAOD', amount)`
//   ]),
//   modifyNameMap() {
//     this.ACTION_MODIFY_NAME({
//       name: 'Donbad'
//     })
//   },
//   modifyCountMap() {
//     this.ACTION_INCREMENT_PAYLAOD({
//       num: 100
//     })
//   }
