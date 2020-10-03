<template>
  <div>
    I am Home...
    <div>
      <router-link :to="{name: 'Hi'}">Hi</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="less" scoped></style>
