<template>
    <div>
        <h1>Index</h1>
        <router-view></router-view>
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>

</style>


