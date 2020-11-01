<template>
  <div class="hi1">
    <br />
    <div><button @click="$router.push({ name: 'Hi' })">跳转Hi</button></div>
    <h4>hi1 routes: {{ routesInfo1 }}</h4>
    <div>Hi1 $route.params: {{ $route.params }}</div>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data() {
    return {};
  },
  computed: {
    routesInfo1() {
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
    console.log('Hi1 this.$route.params :>> ', this.$route.params);
  },
  beforeRouteEnter(to, from, next) {
    console.log('Hi1 RouteEnter to :>> ', to);
    console.log('Hi1 RouteEnter from :>> ', from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Hi1 RouteLeave to :>> ', to);
    console.log('Hi1 RouteLeave from :>> ', from);
    next();
  }
};
</script>

<style lang="less" scoped></style>
