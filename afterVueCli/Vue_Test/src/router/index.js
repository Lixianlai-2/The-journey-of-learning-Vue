import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
      meta: {
        title: "关于",
        isAuth: true,
      },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: {
        title: "主页",
      },
      children: [
        {
          name: "xinwen",
          path: "news",
          meta: {
            // 需要鉴权（鉴定是否有权限）
            isAuth: true,
            title: "新闻",
          },
          component: News,
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth) {
          //     // 判断当前路由是否需要进行权限控制
          //     if (localStorage.school === "qinghua1") {
          //       // document.title = to.meta.title || "Vue学习";
          //       next();
          //     } else {
          //       alert("学校不对，无法读取");
          //     }
          //   } else {
          //     // document.title = to.meta.title || "Vue学习";
          //     next();
          //   }
          // },
        },
        {
          name: "xiaoxi",
          path: "message",
          meta: {
            isAuth: true,
            title: "消息",
          },
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

// router.beforeEach((to, from, next) => {
//   console.log(to, from);

//   if (to.meta.isAuth) {
//     // 判断当前路由是否需要进行权限控制
//     if (localStorage.school === "qinghua") {
//       // document.title = to.meta.title || "Vue学习";
//       next();
//     } else {
//       alert("学校不对，无法读取");
//     }
//   } else {
//     // document.title = to.meta.title || "Vue学习";
//     next();
//   }
// });

router.afterEach((to) => {
  document.title = to.meta.title || "Vue学习";
});

export default router;
