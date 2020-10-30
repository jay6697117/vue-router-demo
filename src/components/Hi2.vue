<template>
  <div class="hi2">hi2:{{ routesInfo2 }}</div>
</template>

<script>
export default {
  name: 'Hi2',
  data() {
    return {
    };
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
  }
};
</script>

<style lang="less" scoped></style>
