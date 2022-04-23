<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="checked"
          @click="checkHandle(todoId)"
        />
        <span>{{ eventName }}</span>
      </label>
      <!-- 隐藏删除按钮 -->
      <button class="btn btn-danger" style="display: none">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["eventName", "checked", "todoId"],
  methods: {
    add() {},
    checkHandle(e) {
      console.log(this);
      console.log("cheackhandle的参数 " + e);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
