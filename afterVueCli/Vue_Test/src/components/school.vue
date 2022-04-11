<template>
  <div>
    <h1>学校名称：{{ schoolName }}</h1>
    <button @click="showSchoolName">点击弹出学生名字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolName: "四川大学",
    };
  },
  methods: {
    showSchoolName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style></style>
