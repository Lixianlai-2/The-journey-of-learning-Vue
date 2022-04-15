<template>
  <div>
    <h1 @click="showName">学生名字：{{ name | mySlice }}</h1>
    <h2>性别：{{ gender }}</h2>

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
};
</script>

<style></style>
