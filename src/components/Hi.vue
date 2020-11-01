<template>
  <!-- <transition name="fade" mode="out-in"> -->
    <div>
      <div>{{ routesInfo }}</div>
      <br />
      <div><button @click="$router.push({ name: 'Home' })">跳转Home</button></div>
      <br />
      <div><button @click="$router.push({ name: 'Hi1', params: { id: 1 } })">跳转子路由Hi1</button></div>
      <br />
      <div><button @click="$router.push({ name: 'Hi2', params: { id: 2 } })">跳转子路由Hi2</button></div>
      <br />
      <hr style="width:100%;padding:1px 0;background-color:red;" />
      <div class="rv-hi" style="display: flex;justify-content: center;">
        <router-view name="left" style="width:50%;background-color:#0cc;height:300px;" />
        <router-view name="right" style="width:50%;background-color:#c0c;height:300px;" />
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'Hi',
  data() {
    return {
      msg: 'I am Hi'
    };
  },
  computed: {
    routesInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route;
      const obj = {
        fullPath,
        path,
        name,
        params,
        query,
        meta
      };
      return obj;
    }
  }
};
</script>

<style lang="less" scoped>
// .fade-enter {
//   opacity: 0;
// }
// .fade-leave {
//   opacity: 1;
// }
// .fade-enter-active {
//   transition: opacity .5 ease;
// }
// .fade-leave-active {
//   opacity: 0;
//   transition: opacity .5s ease;
// }
</style>
