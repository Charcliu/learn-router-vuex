<template>
    <div>
        <h1>vuexA {{$store.state.count}}</h1>
        <button @click="addCount">Count Add</button>
    </div>
</template>
<script>
export default {
  name: 'vuexA',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
