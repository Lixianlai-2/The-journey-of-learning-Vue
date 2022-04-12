// 这里的mixin是不是组件实例对象？
export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  data() {
    return {
      x: 1,
      y: 2,
    };
  },
};
