<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="$router.go(-1)" style="position: fixed;top:15px;left: 15px;">后退</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Error:404'
    };
  }
};
</script>

<style lang="less" scoped></style>
