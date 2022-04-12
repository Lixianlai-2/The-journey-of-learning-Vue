<template>
  <div>
    <h1>学校名称：{{ name }}</h1>
    <button @click="showname">点击弹出学生名字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "四川大学",
    };
  },
  methods: {
    showname() {
      alert(this.name);
    },
  },
};
</script>

<style></style>
