<template>
    <div class="user">
        <!-- 获取动态路由参数 -->
        <h1>User{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route)
  },
  //   响应路由参数的变化
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to)
      console.log(from)
    }
  }
  //   beforeRouteUpdate(to, from, next) {
  //     // react to route changes...
  //     // don't forget to call next()
  //     console.log(to)
  //     console.log(from)
  //     console.log(next)
  //   }
}
</script>
<style lang="sass" scoped>

</style>

