<template>
  <div>
    <h1>学校名称：{{ name }}</h1>
    <button @click="showName">点击弹出学生名字</button>
  </div>
</template>

<script>
import { mixin } from "../mixin.js";

export default {
  data() {
    return {
      name: "四川大学",
    };
  },
  // methods: {
  //   showName() {
  //     alert(this.name);
  //   },
  // },
  // mixins: [mixin],
};
</script>

<style></style>
