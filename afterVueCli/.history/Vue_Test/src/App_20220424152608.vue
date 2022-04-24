<template>
  <div id="app">
    <h2 class="hello">{{ msg }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现子向父传递数据 -->
    <school :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现子向父传递数据 -->
    <!-- 在student组件的实例对象上创造一个自定义事件userDefineEvent -->
    <!-- <student @userDefineEvent.once="getStudentName" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现子向父传递数据 -->
    <!-- 通过this.$refs.student得到student组件的实例对象 -->
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
    getStudentName(studentName, ...arr) {
      console.log(studentName, arr);
    },
  },
  // mounted写在哪个组件里面，哪个组件就挂载完毕
  mounted() {
    // 挂载完后，通过ref找到student组件的实例对象，为其创建时间，并赋予方法
    this.$refs.student.$on("userDefineEvent", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$once("userDefineEvent", this.getStudentName); //绑定自定义事件（一次性）
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
