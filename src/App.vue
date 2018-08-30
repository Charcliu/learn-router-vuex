<template>
  <div id="app">
    <div id="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link> |
      <router-link to="/vuexE">vuexE</router-link>
      <ul>
        <li @click="toUser">To User</li>
        <li @click="toNest">To Nest</li>
        <li @click="toHelloWorld">To HelloWorld</li>
        <li @click="toHome">To Home</li>
        <li @click="toGo">Router Go</li>
      </ul>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <router-view/> -->
    <router-view></router-view>
    <!-- 命名视图 -->
    <!-- <router-view name="header"></router-view>
    <router-view name="main"></router-view>
    <router-view name="footer"></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    // 字符串
    // router.push('home')
    // 对象
    // router.push({ path: 'home' })
    // 命名的路由
    // router.push({ name: 'user', params: { userId: 123 }})
    // 带查询参数，变成 /register?plan=private
    // router.push({ path: 'register', query: { plan: 'private' }})
    toUser () {
      this.$router.push({ name: 'user', params: { id: 123 } })
    },
    toNest () {
      this.$router.push('/nest/pageA')
    },
    toHelloWorld () {
      this.$router.push({ path: '/helloWorld', query: { plan: 'private' } })
    },
    toHome () {
      this.$router.replace('/')
    },
    toGo () {
      this.$router.go(2)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul {
  list-style: none;
  cursor: pointer;
  li {
    float: left;
  }
}
</style>
