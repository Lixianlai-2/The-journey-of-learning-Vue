import { nanoid } from "nanoid";
import axios from "axios";

// 人员相关的配置
const personAbout = {
  namespaced: true,
  actions: {
    // 只添加首位是王的姓名
    addPersonWang(context, value) {
      // console.log(`@@`, context, value);
      if (value.name.indexOf("王") === 0) {
        // 记住actions中是要提交commit的，提交mutations中的方法的
        context.commit("ADD_PERSON", value);
      } else {
        alert("需要添加姓王的人");
      }
    },
    addPersonServer(context) {
      axios
        .get("https://api.uixsj.cn/hitokoto/get?type=social")
        .then((res) => {
          console.log(res);
          context.commit("ADD_PERSON", { id: nanoid(), name: res.data });
        })
        .catch(console.error);
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log(`state`, state);
      console.log(`value:`, value);
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "01", name: "李三" }],
  },
  getters: {
    firstPersonName(state) {
      console.log(`###`, state);
      return state.personList[0].name;
    },
  },
};

export default personAbout;
