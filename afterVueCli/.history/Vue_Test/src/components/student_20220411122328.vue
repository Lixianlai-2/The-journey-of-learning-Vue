<template>
  <div>
    <h1>学生名字：{{ studentName }}</h1>
    <h2>性别：{{ gender }}</h2>
    <button @click="showStudentName">点击弹出学生名字</button>

    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: "28",
      gender: "男",
    };
  },

  methods: {
    showStudentName() {
      console.log(this.studentName);
    },
  },
};
</script>

<style></style>
