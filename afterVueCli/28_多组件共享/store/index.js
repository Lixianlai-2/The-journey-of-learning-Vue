import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 用于存储数据
const state = {
  sum: 0,
  school: "哔哩哔哩",
  subject: "前端",
  personList: [{ id: "01", name: "李三" }],
};
// 用于操作数据
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
  ADD_PERSON(state, value) {
    state.personList.unshift(value);
  },
};
// 用于响应组件中的动作
const actions = {
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      // context.state.sum += value;
      context.commit("JIA", value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      // context.state.sum += value;
      context.commit("JIA", value);
    }, 500);
  },
};

// 将state中的数据进行加工
const getters = {
  bigSum: function (state) {
    // 注意要return
    return state.sum * 10;
  },
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  // 缩写了
  actions,
  // 配置getters
  getters,
});
