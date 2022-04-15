<template>
  <div>
    <h1>你好</h1>
    <myItem />
  </div>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  name: "List",
  components: {
    myItem,
  },
};
</script>

<style scoped>
background-color: #fff;
</style>
