<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <student ref="sch" />
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
      msg: "这是msg的内容",
    };
  },
};
</script>

<style>
#app {
  background-color: aquamarine;
}
</style>
