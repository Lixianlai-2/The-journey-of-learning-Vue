<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <!-- <button @click="showName">点击弹出学生名字</button> -->
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
};
</script>

<style scoped]>
.school {
  padding: 5px;
  background-color: rgb(66, 197, 64);
}
</style>
