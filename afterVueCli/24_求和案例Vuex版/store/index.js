import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 用于存储数据
const state = {
  sum: 0,
};
// 用于操作数据
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};
// 用于响应组件中的动作
const actions = {
  jiaOdd(context, value) {
    console.log(context, value);
    if (context.state.sum % 2) {
      context.state.sum += value;
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.state.sum += value;
    }, 500);
  },
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  // 缩写了
  actions,
});
