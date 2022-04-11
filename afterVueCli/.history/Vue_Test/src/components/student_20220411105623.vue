<template>
  <div>
    <h1>我的理想学校是{{ msg }}</h1>
    <h1>学生名字：{{ studentName }}</h1>
    <h2>{{ gender }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "四川大学",
    };
  },
};
</script>

<style></style>
