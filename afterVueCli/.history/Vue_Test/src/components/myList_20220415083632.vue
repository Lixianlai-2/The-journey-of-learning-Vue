<template>
  <ul class="todo-main">
    <myItem v-for="todo in toDos" :key="todo.id" :eventName="todo.eventName" />
  </ul>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  name: "List",
  components: {
    myItem,
  },
  data() {
    return {
      toDos: [
        { id: "001", eventName: "敲代码", done: "true" },
        { id: "002", eventName: "喝茶", done: "true" },
        { id: "003", eventName: "听音乐", done: "false" },
      ],
    };
  },
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
