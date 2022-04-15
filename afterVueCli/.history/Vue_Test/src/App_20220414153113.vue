<template>
  <div id="app">
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
  background-color: aquamarine;
}
</style>
