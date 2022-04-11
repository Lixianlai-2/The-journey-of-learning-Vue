<template>
  <div>
    <h1>我的理想是{{ msg }}</h1>
    <h1>学生名字：{{ studentName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "四川大学",
      studentName: "李宪来",
    };
  },
};
</script>

<style></style>
