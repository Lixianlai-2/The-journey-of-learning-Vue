<template>
  <div class="todo-footer" v-show="allQuestNum">
    <label>
      <!-- <input type="checkbox" :checked="equalOrNot" @change="checkQuest" /> -->
      <input type="checkbox" :checked="equalOrNot" @change="checkQuest" />
    </label>
    <span>
      <span>已完成{{ alreadyDone }}</span> / 全部{{ allQuestNum }}</span
    >
    <button class="btn btn-danger">清除全部任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  // 引入app.vue中的数据
  props: ["toDos", "changeTodoDone"],
  // 这里面的函数会自动执行
  computed: {
    // 计算已完成任务的数量
    alreadyDone() {
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
    // 当前所有的任务数量
    allQuestNum() {
      return this.toDos.length;
    },
    equalOrNot() {
      return this.alreadyDone === this.allQuestNum && this.allQuestNum > 0;
    },
  },
  methods: {
    checkQuest(e) {
      // event事件
      // console.log(e);

      // 查看这个input是否checked
      // console.log(e.target.checked);

      this.changeTodoDone(e.target.checked);
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
