import Vue from "vue";
import App from "./App.vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由
import router from "./router/index.js";

// 关闭生产模式提醒
Vue.config.productionTip = false;
// 使用路由器插件
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
