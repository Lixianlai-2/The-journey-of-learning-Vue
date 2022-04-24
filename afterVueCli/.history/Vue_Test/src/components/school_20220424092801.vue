<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">传递schoolName给app.vue</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "四川大学",
      address: "成都",
    };
  },
  props: ["getSchoolName"],
  methods: {
    send,
  },
};
</script>

<style scoped]>
.school {
  /* padding: 5px; */
  padding: 5px 1px;
  background-color: rgb(66, 197, 64);
}
</style>
