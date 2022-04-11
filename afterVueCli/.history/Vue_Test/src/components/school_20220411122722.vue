<template>
  <div>
    <h1>学校名称：{{ schoolName }}</h1>
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
      alert(this.studentName);
    },
  },
};
</script>

<style></style>
