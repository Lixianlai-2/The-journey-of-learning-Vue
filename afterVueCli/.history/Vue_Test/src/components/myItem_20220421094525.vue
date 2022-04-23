<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="checked"
          @click="checkHandle(todoId)"
        />
        <!--下面这种也能用，但不推荐，因为修改了原本只读的props，因为隐藏在对象中，所以才能够使用  -->
        <input type="checkbox" :checked="checked" v-model="todo.done" />
        <span>{{ eventName }}</span>
      </label>
      <!-- 隐藏删除按钮 -->
      <button class="btn btn-danger" style="display: none">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["eventName", "checked", "todoId", "checkTodo", "todo"],
  methods: {
    add() {},
    checkHandle(clickId) {
      console.log(this);
      console.log("checkHandle的参数 " + clickId);
      this.checkTodo(clickId);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
