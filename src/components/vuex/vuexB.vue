<template>
    <div>
        <h1>vuexB {{count}}</h1>
    </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  name: 'vuexB',
  data () {
    return {}
  },
  computed: {
    // 获取state的两种方式 直接使用this.$store.state获取，使用mapState辅助函数
    count () {
      return this.$store.state.count
    },
    ...mapState({
      // 箭头函数可使代码更简练
      name: state => state.name
    })
  }
}
</script>
<style lang="sass" scoped>

</style>
