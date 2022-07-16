import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 求和相关的配置
const countAbout = {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "哔哩哔哩",
    subject: "前端",
  },
  getters: {
    bigSum: function (state) {
      // 注意要return
      return state.sum * 10;
    },
  },
};

// 人员相关的配置
const personAbout = {
  namespaced: true,
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "01", name: "李三" }],
  },
  getters: {},
};

export default new Vuex.Store({
  modules: {
    countAbout: countAbout,
    personAbout: personAbout,
  },
});
