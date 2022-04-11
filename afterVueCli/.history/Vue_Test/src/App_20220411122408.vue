<template>
  <div id="app">
    <student />
  </div>
</template>

<script>
import student from "./components/student.vue";

export default {
  name: "App",
  components: {
    student,
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
