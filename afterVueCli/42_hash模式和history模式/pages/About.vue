<template>
  <div>
    <p>这是About区域的内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
  // mounted() {
  //   console.log("About组件挂载完毕了");
  //   window.aboutRoute = this.$route;
  //   window.aboutRouter = this.$router;
  // },
  // beforeDestroy() {
  //   console.log("About组件即将被销毁了");
  // },
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      // 判断当前路由是否需要进行权限控制
      if (localStorage.school === "qinghua1") {
        // document.title = to.meta.title || "Vue学习";
        next();
      } else {
        alert("学校不对，无法读取");
      }
    } else {
      // document.title = to.meta.title || "Vue学习";
      next();
    }
  },
};
</script>

<style scoped></style>
