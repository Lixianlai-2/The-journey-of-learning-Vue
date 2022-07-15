import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
  routes: [
    {
      // name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "xiangqing",
              path: "detail/:id/:title",
              component: Detail,
              // 第一种方式
              // props: { a: 1, b: 2 },

              // 第二种方式，值为布尔值，如果布尔值为真，
              //就把该路由组件收到的所有params参数，以props的形式，
              //传递给Detail组件
              // props: true,

              props($route) {
                return { id: $route.params.id, title: $route.params.title };
              },
            },
          ],
        },
      ],
    },
  ],
});

export default router;
