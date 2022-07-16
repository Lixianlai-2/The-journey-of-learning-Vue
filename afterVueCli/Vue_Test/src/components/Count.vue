<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前10倍求和为：{{ bigSum }}</h1>
    <h1>
      我在 {{ school }} <br />
      学习 {{ subject }}
    </h1>
    <h1 style="color: red">Person组件目前有{{ personList.length }}人</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
      // sum: 0, // 求和的数字
    };
  },
  computed: {
    ...mapState("countAbout", ["sum", "subject", "school"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout", ["bigSum"]),
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // sum() {
    //   return this.$store.state.sum;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // }
  },

  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    ...mapMutations("countAbout", {
      increment: "JIA",
      decrement: "JIAN",
    }),

    // ············································

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
