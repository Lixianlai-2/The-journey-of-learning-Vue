<template>
  <div>
    <div class="todo-header">
      <!-- 增加键盘事件，对input的内容按下enter后 -->
      <input
        type="text"
        placeholder="请输入你的任务，按回车键确认"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Header",
  methods: {
    add(event) {
      if (event.target.value === "") {
        alert("请输入具体任务");
        return;
      }
      const todoObj = {
        id: nanoid(),
        eventName: event.target.value,
        done: false,
      };
      console.log("header中的this:", this);
      // 调用receive时，相当于还是在app.vue里面调用，所以也是在app.vue里面找toDos的数据
      this.receive(todoObj);
      console.dir(this.receive);
      return todoObj;
    },
  },
  // 引入的父级数据，会出现在vc（组件实例对象）上
  props: ["receive"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
