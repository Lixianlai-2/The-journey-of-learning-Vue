<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和为：{{ bigSum }}</h1>
    <h1>
      我在 {{ school }} <br />
      学习 {{ subject }}
    </h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
      // sum: 0, // 求和的数字
    };
  },
  computed: {
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // sum() {
    //   return this.$store.state.sum;
    // },
    ...mapState(["sum", "subject", "school"]),
    ...mapGetters(["bigSum"]),
  },

  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
