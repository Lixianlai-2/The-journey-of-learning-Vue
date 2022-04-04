// 声明式渲染
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World! Vue here!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    mes: "页面加载于" + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  // 注意html中是用的id，不是用的class
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "First" }, { text: "Second" }],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  //   注意这里是methods，有个s，就因为这个s我查了很久啊
  methods: {
    reverseMessage() {
      console.log(this);
      console.log(this.message);
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Lixianlai2!",
  },
});
