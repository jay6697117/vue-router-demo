<template>
  <div>
    <h1>{{ routesInfo }}</h1>
    <button @click="$router.push({ name: 'Hi' })">跳转Hi</button>
    <button @click="showIn = true">调起键盘</button>
    <div>
      <vehicle-keyboard v-model="showIn" />
    </div>
  </div>
</template>

<script>
import VehicleKeyboard from '@/components/VehicleKeyboard.vue';

export default {
  name: 'Home01',
  title: 'lalala',
  data() {
    return {
      showIn:false
    };
  },
  components: {
    VehicleKeyboard
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
  },
  mounted() {
    console.log('this :>> ', this);
    console.log('$route.name :>> ', this.$route.name);
    console.log('$options.name :>> ', this.$options.name);
    console.log('$options.title :>> ', this.$options.title);
  }
};
</script>

<style lang="less" scoped></style>
