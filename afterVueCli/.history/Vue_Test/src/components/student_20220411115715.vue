<template>
  <div>
    <h1>我的理想学校是{{ msg }}</h1>
    <h1>学生名字：{{ studentName }}</h1>
    <h2>性别：{{ gender }}</h2>
    <h2>年龄：{{ age + 1 }}</h2>
    <button @click="showVc">点击展示vc内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "四川大学",
      myAge: this.age,
    };
  },
  props: ["studentName", "gender", "age"],
  methods: {
    showVc() {
      console.log(this);
    },
  },
};
</script>

<style></style>
