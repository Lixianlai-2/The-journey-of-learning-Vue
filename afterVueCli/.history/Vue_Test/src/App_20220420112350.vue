<template>
  <div id="root">
    <div class="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <myHeader :receive="receiveFn" />
          <!-- 引入data中的数据 -->
          <myList :toDos="toDos" />
          <myFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import myFooter from "./components/myFooter.vue";
import myList from "./components/myList.vue";

export default {
  name: "Root",
  components: {
    myHeader,
    myFooter,
    myList,
  },
  data() {
    return {
      toDos: [
        { id: "001", eventName: "敲代码", done: true },
        { id: "002", eventName: "喝茶", done: true },
        { id: "003", eventName: "听音乐", done: false },
      ],
    };
  },
  methods: {
    receiveFn(inputTodoObj) {
      // 这个对象是由Header中提供的，因为是在header中调用的这个函数
      console.log(inputTodoObj);
      console.log("app.vue中的this:", this);
      console.log(this.toDos.unshift(inputTodoObj));
    },
  },
};
</script>

<style lang="less">
/* 注意在App.vue里面，不用加scoped，因为这些样式要全局应用 */
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
