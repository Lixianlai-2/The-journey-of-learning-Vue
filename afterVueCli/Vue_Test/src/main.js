import Vue from "vue";
import App from "./App.vue";

// 关闭生产模式提醒
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted() {
    // 3秒钟之后销毁vm,所有的自定义组件就都不能用了
    setTimeout(() => {
      this.$destroy();
    }, 3000);
  },
}).$mount("#app");
