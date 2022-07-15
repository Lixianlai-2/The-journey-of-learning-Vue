<template>
  <div>
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header"><h2>Vue Router Demo2</h2></div>
      <button @click="forward">前进</button>
      <button @click="back">回退</button>
      <button @click="go">往前走3步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
    go() {
      this.$router.go(3);
    },
  },
};
</script>

<style scoped></style>
