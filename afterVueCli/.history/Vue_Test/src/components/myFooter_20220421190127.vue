<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="doneTotal === toDos.length" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ toDos.length }}</span
    >
    <button class="btn btn-danger">清除全部任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  // 引入app.vue中的数据
  props: ["toDos"],
  // 这里面的函数会自动执行
  computed: {
    // 计算已完成任务的数量
    doneTotal() {
      // 一、普通的方法
      // let i = 0;
      // this.toDos.forEach((todo) => {
      //   // 如果todo.done为true
      //   if (todo.done) {
      //     i++;
      //   }
      // });
      // return i;

      // 二、用reduce
      return this.toDos.reduce(
        // pre是reduce里面的callback函数的返回值（第一个为设定的初始值或array[0]
        (pre, currentEl) => pre + (currentEl.done ? 1 : 0),
        0
      );
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
