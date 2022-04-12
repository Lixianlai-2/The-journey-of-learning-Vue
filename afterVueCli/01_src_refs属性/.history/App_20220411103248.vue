<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <school ref="sch" />
    <button @click="showName" ref="btn">点我展示DOM</button>
  </div>
</template>

<script>
import school from "./components/school.vue";

export default {
  name: "App",
  components: {
    school,
  },
  data() {
    return {
      msg: "这是msg的内容",
    };
  },
  methods: {
    showName() {
      console.log(this.$refs);
      console.log(this.$refs.btn);
      console.log(this.$refs.title);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
#app {
  background-color: aquamarine;
}
</style>
