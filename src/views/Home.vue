<template>
  <div>
    I am Home...
    <div>
      <router-link :to="{ name: 'Hi' }" class="rl-home">Hi</router-link>
      <router-view class="rv-home"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="less" scoped></style>
