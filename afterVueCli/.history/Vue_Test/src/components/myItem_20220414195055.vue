<template>
  <div>
    <li>
      <label>
        <input type="checkbox" />
        <span>第一个任务</span>
      </label>
      <!-- 隐藏删除按钮 -->
      <button class="btn btn-danger" style="display: none">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
};
</script>

<style></style>
