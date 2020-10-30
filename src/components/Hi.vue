<template>
  <div>
    <div>{{ routesInfo }}</div>
    <button @click="$router.push({ name: 'Hi1'})">跳转子路由Hi1</button>
    <button @click="$router.push({ name: 'Hi2'})">跳转子路由Hi2</button>
    <hr />
    <router-view />
  </div>
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

<style lang="less" scoped></style>
