<template>
  <div>
    <h1>学生名字：{{ name }}</h1>
    <hr />
    <h2>性别：{{ gender }}</h2>
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
};
</script>

<style></style>
