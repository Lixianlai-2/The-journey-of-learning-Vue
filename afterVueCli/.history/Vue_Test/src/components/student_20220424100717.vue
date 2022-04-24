<template>
  <div class="student">
    <h2>学生名字：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendStudentName">传递StudentName给app.vue</button>
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
      // 使用对应的事件，因为这个自定义事件被我添加到了组件的实例对象上，所以可以这样找到它，使用它
      this.$emit("userDefineEvent", this.name); //额外的参数，按照顺序被也可以被接受
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
