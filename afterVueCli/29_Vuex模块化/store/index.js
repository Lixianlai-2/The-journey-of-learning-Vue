import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

import countAbout from "./countAbout";
import personAbout from "./personAbout";

export default new Vuex.Store({
  modules: {
    countAbout: countAbout,
    personAbout: personAbout,
  },
});
