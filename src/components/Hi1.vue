<template>
  <div class="hi1">
    <h4>hi1 routes: {{ routesInfo1 }}</h4>
    <div>$route.params: {{ $route.params }}</div>
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
    console.log('this.$route.params :>> ', this.$route.params);
  },
};
</script>

<style lang="less" scoped></style>
