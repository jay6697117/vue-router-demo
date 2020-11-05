<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div>
    <h4>routesInfo: {{ routesInfo }}</h4>
    <!-- <div><button @click="$router.push({ name: 'Home' })">跳转Home</button></div> -->
    <div><button @click="$router.push('/')">跳转Home</button></div>
    <br />
    <div><button @click="$router.push({ name: 'Hi' })">跳转Hi</button></div>
    <br />
    <div><button @click="$router.push({ path: '/unknown' })">跳转Unknown</button></div>
    <br />
    <div><button @click="showInLess = true">调起键盘less</button></div>
    <div><vehicle-keyboard-less v-model="showInLess" /></div>
    <br />
    <div><button @click="showInScss = true">调起键盘scss</button></div>
    <div><vehicle-keyboard-scss v-model="showInScss" /></div>
    <h4>$route.name: {{ $route.name }}</h4>
    <button @click="$router.go(-1)" style="position: fixed;top:15px;left: 15px;">后退</button>
  </div>
  <!-- </transition> -->
</template>

<script>
import VehicleKeyboardLess from '@/components/VehicleKeyboardLess.vue';
import VehicleKeyboardScss from '@/components/VehicleKeyboardScss.vue';

export default {
  name: 'Home',
  title: 'lalala',
  data() {
    return {
      showInLess: false,
      showInScss: false
    };
  },
  components: {
    VehicleKeyboardLess,
    VehicleKeyboardScss
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
