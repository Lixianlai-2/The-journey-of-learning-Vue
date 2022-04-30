<template>
  <div class="student">
    <h2>学生名字：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendStudentName">传递StudentName给app.vue</button>
    <button @click="unbind">解绑</button>
    <button @click="death">点击销毁自定义事件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "李先来",
      gender: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发对应的事件，因为这个自定义事件被我添加到了组件的实例对象上，所以可以这样找到它，使用它
      this.$emit("userDefineEvent", this.name, "第二个参数", 111, 222, 444); //额外的参数，按照顺序被也可以被接受
      this.$emit("userDefinedEvent2");
    },
    unbind() {
      // 解绑所有
      this.$off();

      // 解绑第一个自定义事件
      // this.$off("userDefineEvent");

      // 解绑了两个自定义事件
      // this.$off(["userDefineEvent", "userDefinedEvent2"]);
    },
    death() {
      this.$destroy(); // 销毁后，组件的自定义事件就不能用了
    },
  },
};
</script>

<style scoped>
.student {
  /* padding: 1px; */
  padding: 5px 1px;
  background-color: pink;
}
</style>
