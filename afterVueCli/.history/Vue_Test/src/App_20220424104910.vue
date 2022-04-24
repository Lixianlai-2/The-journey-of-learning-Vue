<template>
  <div id="app">
    <h2 class="hello">{{ msg }}</h2>
    <school :getSchoolName="getSchoolName" />

    <!-- 在student组件的实例对象上创造一个自定义事件userDefineEvent -->
    <!-- <student @userDefineEvent="getStudentName" /> -->

    <!-- 用refs来操作自定义组件 -->
    <student ref="student" />
  </div>
</template>

<script>
import School from "./components/school.vue";
import student from "./components/student.vue";

export default {
  name: "App",
  components: {
    student,
    School,
  },
  data() {
    return {
      msg: "我正在自学前端技术",
    };
  },
  methods: {
    getSchoolName(schoolName) {
      console.log(schoolName);
    },
    getStudentName(studentName, secondProperty) {
      console.log(studentName, secondProperty);
    },
  },
  // mounted写在哪个组件里面，哪个组件就挂载完毕
  mounted() {
    this.$refs.student.$("userDefineEvent", this.getStudentName);
  },
};
</script>

<style lang="less">
#app {
  border: 1px solid black;
  background-color: gray;
  padding: 10px 2px;
  .hello {
    border: 1px solid blue;
    background-color: rgb(71, 180, 226);
    margin-bottom: 20px;
  }
}
</style>
