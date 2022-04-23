<template>
  <div id="root">
    <div class="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <myHeader :receiveInputObj="receiveFn" />
          <!-- 引入data中的数据 -->
          <myList
            :toDos="toDos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
          />
          <myFooter
            :toDos="toDos"
            :changeTodoDone="changeTodoDone"
            :clearAlreadyDone="clearAlreadyDone"
          />
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
      // 由于toDos是myHeader和myFooter组件都在使用，所以放在App.vue中

      // 从localStorage中得到数据，并将其从JSON转化为原本的内容
      toDos: JSON.parse(localStorage.getItem("toDos")) || [], // 这里之所以用|| [] 是因为刚打开页面时，toDos没有数据，是null， 而null身上没有length属性，会在footer.vue上报错

      // 原来设置的数据 [
      // { id: "001", eventName: "敲代码", done: true },
      // { id: "002", eventName: "喝茶", done: true },
      // { id: "003", eventName: "听音乐", done: false },
      // ],
    };
  },
  methods: {
    //添加一个todo
    //接受一个todo对象，并添加到原有数据中
    receiveFn(inputTodoObj) {
      // 这个对象是由Header中提供的，因为是在header中调用的这个函数
      this.toDos.unshift(inputTodoObj);
    },

    // 勾选一个todo
    // 将用户点击的input的done值取反
    checkTodo(clickId) {
      this.toDos.forEach((todo) => {
        // 当遍历的id等于用户点击的那个id，就给对应todo的done值取反
        if (todo.id === clickId) todo.done = !todo.done;
      });
      console.log(this.toDos);
    },

    // 删除一个todo
    deleteTodo(btnId) {
      // 注意使用的是filter，返回一个数组，不改变原数组，所以要将其结果重新赋值给this.toDos
      this.toDos = this.toDos.filter((todo) => todo.id !== btnId);
    },

    // 让任务全部完成，或者让任务全部取消
    // 让所有的todo的done值都改变为true
    changeTodoDone(doneStatus) {
      this.toDos.forEach((todo) => {
        todo.done = doneStatus;
        // todo.done === doneStatus;
      });
    },

    // 清除已完成的任务
    clearAlreadyDone() {
      this.toDos = this.toDos.filter((todo) => {
        return todo.done !== true;
      });
    },
  },
  watch: {
    // 缩写后的浅层监视，只检测到第一层数组层
    // toDos(value) {
    //   // 设置
    //   localStorage.setItem("toDos", JSON.stringify(value));
    // },

    // watch的深度监视
    toDos: {
      deep: true,
      handler(value) {
        localStorage.setItem("toDos", JSON.stringify(value));
      },
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
