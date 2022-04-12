import Vue from "vue";
import App from "./App.vue";
import plugins from "./plugins";

// 使用插件
Vue.use(plugins);
// 关闭生产模式提醒
Vue.config.productionTip = false;

new Vue({
  methods: {
    showThis() {
      console.log(console.log(this));
    },
  },
  render: (h) => h(App),
}).$mount("#app");
