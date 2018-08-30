<template>
    <div>
        <h1>vuexC | {{count}} | {{name}} | {{countPlusLocalState}}</h1>
        <h2>{{$store.getters.getUpName}} | {{$store.getters.getUpNameWithCount}}</h2>
        <h3>{{$store.getters.getTodo(1)}}</h3>
        <h4>{{getUpName}} | {{getUpNameWithCount}} | {{getTodo}}</h4>
    </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'vuexB',
  data () {
    return {
      localCount: 3
    }
  },
  computed: {
    // 对象展开运算符，mapState 函数返回的是一个对象
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      name: state => state.name,

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数，和本地属性配合使用
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters(['getUpName', 'getUpNameWithCount']),
    getTodo () {
      return this.$store.getters.getTodo(2)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
