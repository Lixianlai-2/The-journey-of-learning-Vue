<template>
  <div id="app">
    <h1 class="hello">hello</h1>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import myFooter from "./components/myFooter.vue";
import myList from "./components/myList.vue";

export default {
  name: "App",
  components: {
    myHeader,
    myFooter,
    myList,
  },
};
</script>

<style lang="less">
#app {
  background-color: aquamarine;
  .hello {
    border: 1px solid blue;
    background-color: rgb(146, 22, 22);
  }
}
</style>
