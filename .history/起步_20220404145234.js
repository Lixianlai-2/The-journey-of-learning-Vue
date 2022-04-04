// 关不提示
Vue.config.productionTip = false;

// // 声明式渲染
// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello World! Vue here!",
//   },
// });

// var app2 = new Vue({
//   el: "#app-2",
//   data: {
//     mes: "页面加载于" + new Date().toLocaleString(),
//   },
// });

// var app3 = new Vue({
//   // 注意html中是用的id，不是用的class
//   el: "#app-3",
//   data: {
//     seen: true,
//   },
// });

// var app4 = new Vue({
//   el: "#app-4",
//   data: {
//     todos: [{ text: "First" }, { text: "Second" }],
//   },
// });

// var app5 = new Vue({
//   el: "#app-5",
//   data: {
//     message: "Hello Vue.js!",
//   },
//   //   注意这里是methods，有个s，就因为这个s我查了很久啊
//   methods: {
//     reverseMessage() {
//       console.log(this);
//       console.log(this.message);
//       this.message = this.message.split("").reverse().join("");
//     },
//   },
// });

// // 处理用户输入
// var app6 = new Vue({
//   el: "#app-6",
//   data: {
//     message: "Hello Lixianlai2!",
//   },
// });

// 7.
new Vue({
  data: function () {
    return {
      n: 0,
    };
  },
//   template: `<div id="app-7">
//   {{n}}
//   <button @click="add">+1</button>
// </div>`,

  methods: {
    add() {
      this.n += 1;
    },
  },
}).$mount("#app-7");

// 组件化应用构建
