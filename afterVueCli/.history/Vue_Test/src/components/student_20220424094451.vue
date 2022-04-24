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
    sendStudentName() {},
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
