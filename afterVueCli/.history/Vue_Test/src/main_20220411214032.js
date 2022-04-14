import Vue from "vue";
import App from "./App.vue";
import { mixin } from "./mixin";
Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");