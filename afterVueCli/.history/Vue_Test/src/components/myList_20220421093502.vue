<template>
  <ul class="todo-main">
    <myItem
      v-for="todo in toDos"
      :key="todo.id"
      :eventName="todo.eventName"
      :checked="todo.done"
      :todoId="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  name: "List",
  components: {
    myItem,
  },
  props: ["toDos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
