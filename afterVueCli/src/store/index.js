import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 用于存储数据
const state = {};
// 用于操作数据
const mutations = {};
// 用于响应组件中的动作
const actions = {};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  // 缩写了
  actions,
});
