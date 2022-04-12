<template>
  <div>
    <h1>学生名字：{{ name }}</h1>
    <h2>性别：{{ gender }}</h2>
    <button @click="showName">点击弹出学生名字</button>

    <hr />
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
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style></style>
