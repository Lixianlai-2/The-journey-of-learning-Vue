export default {
  // 必须有install函数，参数是Vue构造函数
  install(Vue) {
    console.log(Vue);

    // 全局过滤器
    // 这部分的作用是什么？
    Vue.filter("mySlice", function () {
      return value.slice(0, 4);
    });

    // 定义全局指令
    Vue.directive("fbind", {});
  },
};
