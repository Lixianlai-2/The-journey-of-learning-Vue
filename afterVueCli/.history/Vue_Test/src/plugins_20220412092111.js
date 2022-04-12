export default {
  // 必须有install函数，参数是Vue构造函数
  install(Vue, x, y, z) {
    console.log("@", Vue);
    console.log("#", x, y, z);

    // 全局过滤器
    // 这部分的作用是什么？只要字符串的前2位
    Vue.filter("mySlice", function (value) {
      console.log("filter works!");
      return value.slice(0, 2);
    });

    // 定义全局指令
    Vue.directive("fbind", {
      // 指令与元素成功绑定时
      bind(element, binding) {
        element.value = binding.value;
      },
      // 指令所在元素被插入页面时
      inserted(element) {
        element.focus();
      },
      // 指令所在的末班被重新重构时
      update(element, binding) {
        element.value = binding.value;
      },
    });
  },
};
