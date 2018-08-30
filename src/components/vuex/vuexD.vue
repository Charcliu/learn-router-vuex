<template>
    <div>
        <h1>vuexD {{$store.state.count}}</h1>
        <button @click="addCount">Count Add</button>
        <button @click="addCountWithObjStyle">Count Add With Obj Style</button>
        <button @click="addCountWithAsyncTrue">Count Add With Async True</button>
        <button @click="toughMapMutation">Though mapMutations</button>
        <button @click="toughMapMutationObj">Though mapMutations Obj</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'vuexA',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementWithObjStyle' // 将 `this.incrementWithObjStyle(amount)` 映射为 `this.$store.commit('incrementWithObjStyle', amount)`
    ]),
    addCount () {
      this.$store.commit('incrementWithPayLoad', 10)
    },
    addCountWithObjStyle () {
      this.$store.commit({
        type: 'incrementWithObjStyle',
        num: 20
      })
    },
    addCountWithAsyncTrue () {
      this.$store.commit({
        type: 'INCREMENT_ASYNC_TRUE',
        num: 20
      })
    },
    toughMapMutation () {
      this.increment()
    },
    toughMapMutationObj () {
      this.incrementWithObjStyle({
        num: 30
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
