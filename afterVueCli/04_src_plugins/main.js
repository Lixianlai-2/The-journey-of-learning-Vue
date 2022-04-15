import Vue from "vue";
import App from "./App.vue";
import plugins from "./plugins";

// 使用插件
Vue.use(plugins, 1, 2, 3);
// 关闭生产模式提醒
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
