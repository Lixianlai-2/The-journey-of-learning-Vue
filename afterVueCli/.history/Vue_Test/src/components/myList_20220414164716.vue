<template>
  <div class="todo-main">
    <li>
      <label>
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
    </li>
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
.items {
  background-color: rgb(21, 95, 37);
}
</style>
