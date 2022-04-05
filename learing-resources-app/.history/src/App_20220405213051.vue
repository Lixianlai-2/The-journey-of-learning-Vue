<template>
  <ul>
    <learning-resources
      v-for="res in storeResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link=""
    ></learning-resources>
  </ul>
</template>

<script>
//如果没有使用，那么webStorm会建议删除
import LearningResources from "@/components/learning-resources/LearningResources";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LearningResources,
    // 引入组件时，可以命名，所有上边实际上是 LearningResources:LearningResources
  },
  data() {
    return {
      //虚拟数据
      storeResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://www.vue.js.com",
        },
        {
          id: "bing",
          title: "Bing",
          description: "Learn to bing",
          link: "https://cn.bing.com/",
        },
      ],
    };
  },
};
</script>
