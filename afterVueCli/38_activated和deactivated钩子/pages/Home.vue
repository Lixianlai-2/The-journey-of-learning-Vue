<template>
  <div>
    <p>这是Home区域的内容</p>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item active"
            active-class="active"
            to="/home/message"
            >Message
          </router-link>
        </li>
      </ul>
      <keep-alive :include="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  //   mounted() {
  //     console.log("Home组件挂载完毕了");
  //     window.homeRoute = this.$route;
  //     window.homeRouter = this.$router;
  //   },
  //   beforeDestroy() {
  //     console.log("Home组件即将被销毁了");
  //   },
};
</script>
