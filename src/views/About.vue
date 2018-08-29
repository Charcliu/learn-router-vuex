<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {}
  },
  mounted() {
    // 通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

