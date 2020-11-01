<template>
  <div class="hi2">
    <br />
    <div><button @click="$router.push({ name: 'Hi' })">跳转Hi</button></div>
    <h4>hi2 routes: {{ routesInfo2 }}</h4>
    <div>Hi2 $route.params: {{ $route.params }}</div>
  </div>
</template>

<script>
export default {
  name: 'Hi2',
  data() {
    return {};
  },
  computed: {
    routesInfo2() {
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
  },
  created() {
    console.log('Hi2 this.$route.params :>> ', this.$route.params);
  },
  beforeRouteEnter(to, from, next) {
    console.log('Hi2 RouteEnter to :>> ', to);
    console.log('Hi2 RouteEnter from :>> ', from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Hi2 RouteLeave to :>> ', to);
    console.log('Hi2 RouteLeave from :>> ', from);
    next();
  }
};
</script>

<style lang="less" scoped></style>
