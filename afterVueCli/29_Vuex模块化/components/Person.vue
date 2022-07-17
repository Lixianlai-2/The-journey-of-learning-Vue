<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addListItem">添加</button>
    <button @click="addWang">添加姓王的姓名</button>
    <button @click="addServer">添加服务器语句</button>
    <h3>列表中第一个人的名字是：{{ showFirstName }}</h3>
    <ul>
      <li v-for="item in personList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <h1 style="color: red">当前Count组件求和为{{ sum }}</h1>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addListItem() {
      // 如果输入的值为空，就返回，不执行下面的代码
      if (!this.name) return;
      const personObj = { id: nanoid(), name: this.name };
      console.log(personObj);
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      // 点击添加后，清空输入框中的内容
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
    },
    addServer() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },

    showFirstName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style scoped></style>
