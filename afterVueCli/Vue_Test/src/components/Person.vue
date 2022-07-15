<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addListItem">添加</button>
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
      this.$store.commit("ADD_PERSON", personObj);
      // 点击添加后，清空输入框中的内容
      this.name = "";
    },
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
