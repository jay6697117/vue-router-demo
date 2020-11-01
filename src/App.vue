<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="rv-home" style="background-color:#ccc;padding:10px;" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity .5s ease;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s ease;
}
</style>
