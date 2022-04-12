<template>
  <div id="app">
    <student />
    <school />
    <button @click="showThis">点击显示vm</button>
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

<style>
#app {
  background-color: aquamarine;
}
</style>
