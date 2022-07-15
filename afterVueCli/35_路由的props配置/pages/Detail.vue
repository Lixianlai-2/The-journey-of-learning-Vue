<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // 接收外部路由参数
  props: ["id", "title"],
  // computed: {
  //   id() {
  //     return this.$route.params.id;
  //   },
  //   title() {
  //     return this.$route.params.title;
  //   },
  // },
};
</script>

<style scoped></style>
