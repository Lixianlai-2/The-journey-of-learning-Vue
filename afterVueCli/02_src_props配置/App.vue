<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <student ref="sch" studentName="李宪来" gender="男" :age="28" />
    <student ref="sch" studentName="张三" gender="男" :age="20" />
    <student ref="sch" studentName="王二麻子" gender="女" :age="23" />
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
