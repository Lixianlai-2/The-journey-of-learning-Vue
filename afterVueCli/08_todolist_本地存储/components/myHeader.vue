<template>
  <div>
    <div class="todo-header">
      <!-- 增加键盘事件，对input的内容按下enter后 -->
      <input
        type="text"
        placeholder="请输入你的任务，按回车键确认"
        @keyup.enter="add"
        v-model="eventName"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Header",
  data() {
    return {
      // 跟v-model对应的数据
      eventName: "",
    };
  },
  methods: {
    add() {
      console.log(this);
      // 得到用户输入的字符串，然后用trim()将这个字符串周围的空格都删除
      // 再判断input中输入的布尔值是否为false，如果是，就return
      if (!this.eventName.trim()) {
        // if (!event.target.value.trim()) {
        alert("请输入具体任务");
        return;
      }
      // 得到用户输入所形成的数据对象，其中的done是代表这件事是否完成
      const todoObj = {
        id: nanoid(),
        eventName: this.eventName,
        // eventName: event.target.value,
        done: false,
      };
      console.log("header中的this:", this);
      // 在这里调用receive函数的作用，就是获得header中的todoObj对象，也就是用户刚刚传入的对象。这header中的数据对象被传入到receive函数中，而这个函数的作用，是往app.vue中的toDos数据对象中添加内容
      this.receiveInputObj(todoObj);
      // 输入完之后，输入框重新变成空
      this.eventName = "";
    },
  },
  // 引入的父级函数
  props: ["receiveInputObj"],
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
