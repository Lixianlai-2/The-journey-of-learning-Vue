<template>
  <div id="app">
    <h2 class="hello">{{ msg }}</h2>
    <student />
    <school />
  </div>
</template>

<script>
import School from "./components/school.vue";
import student from "./components/student.vue";

export default {
  name: "App",
  components: {
    student,
    School,
  },
  data() {
    return {
      msg: "我正在自学前端技术",
    };
  },
};
</script>

<style lang="less">
#app {
  border: 1px solid black;
  background-color: gray;
  padding: 10px;
  .hello {
    border: 1px solid blue;
    background-color: rgb(71, 180, 226);
    margin-bottom: 20px;
  }
}
</style>
