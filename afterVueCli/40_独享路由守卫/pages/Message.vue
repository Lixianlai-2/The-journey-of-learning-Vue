<template>
  <div>
    <div>
      <ul>
        <!-- <li v-for="m in messageList" :key="m.id">
          <router-link :to="`/home/message/detail/${m.id}/${m.title}`"
            >{{ m.title }}
          </router-link>
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
        </li> -->
        <li v-for="m in messageList" :key="m.id">
          <router-link
            :to="{
              name: 'xiangqing',
              params: {
                id: m.id,
                title: m.title,
              },
            }"
          >
            {{ m.title }}
          </router-link>
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
        </li>
      </ul>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  beforeDestroy() {
    console.log("即将被销毁了");
  },
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      // 这里代表往哪里跳转（历史记录是push方式）
      this.$router.push({
        name: "xiangqing",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      console.log(this.$router);
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style scoped></style>
