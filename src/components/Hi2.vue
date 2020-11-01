<template>
  <div class="hi2">
    <h4>hi2 routes: {{ routesInfo2 }}</h4>
    <div>$route.params: {{ $route.params }}</div>
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
    console.log('this.$route.params :>> ', this.$route.params);
  },
};
</script>

<style lang="less" scoped></style>
