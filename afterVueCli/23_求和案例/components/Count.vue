<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
      sum: 0, // 求和的数字
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += 1;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += 1;
      }, 1000);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
