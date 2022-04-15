<template>
  <div>
    <h1 @click="showName">学生名字：{{ name | mySlice }}</h1>
    <h2>性别：{{ gender }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click="showName">点击弹出学生名字</button>

    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "李先来",
      gender: "男",
    };
  },
  methods: {
    showName() {
      // 注意要调用，这里是使用Vue原型上的方法
      this.hello();
    },
  },
};
</script>

<style></style>
