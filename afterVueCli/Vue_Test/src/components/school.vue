<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <!-- 添加事件绑定，用来给父组件传输数据用 -->
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
  // 接受父组件的函数
  props: ["getSchoolName"],
  methods: {
    sendSchoolName() {
      // 在子组件的method里调用从父组件传入的函数
      this.getSchoolName(this.name);
    },
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
