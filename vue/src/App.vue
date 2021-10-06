<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="home" :route="{ name:'Home' }">Home</el-menu-item>
      <el-menu-item index="about" :route="{ name:'About' }">About</el-menu-item>
      <el-menu-item>
        <a href="https://element.eleme.io" target="_blank">Link</a>
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: this.$route.name
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
</style>
