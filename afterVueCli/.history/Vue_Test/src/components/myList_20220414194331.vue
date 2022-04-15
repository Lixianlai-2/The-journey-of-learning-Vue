<template>
  <span class="todo-main">
    <!-- 用props -->
    <myItem />
    <myItem />
  </span>
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
.items {
  background-color: rgb(21, 95, 37);
}
</style>
