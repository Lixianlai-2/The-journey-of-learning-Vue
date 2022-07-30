<template>
  <div>
    <p @click="doThis"></p>
  </div>
</template>

<script>
// import About from
import VueRouter from "vue-rouer";

let user = {
  name: 1,
  sur: 2,
  set fullName(value) {
    [this.name, this.sur] = value.split(" ");
  },
  get fullName() {
    return this.name + this.sur;
  },
};

user.fullName = "Mark Li";
user.fullName;

new VueRouter({
  routes: [
    {
      path: "about",
      component: About,
      children: [
        {
          path: "name",
          component: Name,
        },
      ],
    },
  ],
});

let arr = [1, , , , , 2, "22", 222, 22, 22, 22, 2, 1, 444, 444, 444];
uniq(arr);

export default {
  mounted() {},
};
</script>

<style scoped></style>
