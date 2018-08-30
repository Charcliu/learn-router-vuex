<template>
    <div>
        <h1>vuexE {{$store.state.count}} | {{$store.state.name}}</h1>
        <button @click='addCount'>Add Count</button>
        <button @click='addCountPayLoad'>Add Count With PayLoad</button>
        <button @click='modifyName'>Modify Name</button>
        <button @click='modifyNameMap'>Thought Map ModifyName</button>
        <button @click='modifyCountMap'>Thought Map ModifyCount</button>
        <button @click='groupAction'>组合Action</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'vuexB',
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'ACTION_MODIFY_NAME', // 将 `this.ACTION_MODIFY_NAME()` 映射为 `this.$store.dispatch('ACTION_MODIFY_NAME')`

      // `mapActions` 也支持载荷：
      'ACTION_INCREMENT_PAYLAOD', // 将 `this.ACTION_INCREMENT_PAYLAOD(amount)` 映射为 `this.$store.dispatch('ACTION_INCREMENT_PAYLAOD', amount)`
      'ACTION_MODIFY_ALL'
    ]),
    addCount () {
      // 分发Action
      this.$store.dispatch('ACTION_INCREMENT')
    },
    addCountPayLoad () {
      // 分发Action
      this.$store.dispatch({
        type: 'ACTION_INCREMENT_PAYLAOD',
        num: 50
      })
    },
    modifyName () {
      this.$store.dispatch({
        type: 'ACTION_MODIFY_NAME',
        name: 'Fluently'
      })
    },
    modifyNameMap () {
      this.ACTION_MODIFY_NAME({
        name: 'Donbad'
      })
    },
    modifyCountMap () {
      this.ACTION_INCREMENT_PAYLAOD({
        num: 100
      })
    },
    groupAction () {
      this.ACTION_MODIFY_ALL({
        name: 'MacBook',
        num: 1000
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
