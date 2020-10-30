<template>
  <div class="hi1">hi1:{{ routesInfo1 }}</div>
</template>

<script>
export default {
  name: 'Hi1',
  data() {
    return {
    };
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
  }
};
</script>

<style lang="less" scoped></style>
