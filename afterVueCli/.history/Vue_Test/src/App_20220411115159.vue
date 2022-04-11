<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <student ref="sch" studentName="李先来" gender="男" :age="28" />
    <button @click="showVc">点击展示vc内容</button>
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
  methods: {
    showVc() {
      console.log(this);
    },
  },
};
</script>

<style>
#app {
  background-color: aquamarine;
}
</style>
