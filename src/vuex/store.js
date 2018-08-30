import Vue from 'vue'
import Vuex from 'vuex'
// * 表示将 './actions'模块中的所有接口挂载到actions对象上  as 表示别名的意思
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

// store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
// 触发变化也仅仅是在组件的 methods 中提交 mutation
