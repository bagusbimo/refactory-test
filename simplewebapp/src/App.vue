<template>
  <div id="app">
    <Diluc msg="Welcome to Your Diluc"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Diluc from './components/Diluc.vue'

export default {
  name: 'App',
  components: {
    Diluc
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34495e;
}
</style>
