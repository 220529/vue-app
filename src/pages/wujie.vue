<template>
  <button @click="handleClick">点击打印日志</button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("vue 按钮被点击了！");
  //   window.$wujie.props.jump({ path: "/react19", query: { react19: "/api" } });
  // 子应用发送事件
  window.$wujie?.bus.$emit("event-01", { name: "张三", age: 20 });
};
// 子应用 B 监听并跳转
window.$wujie?.bus.$on("routeChange", (e: any) => {
  console.log("子应用 B: ", e);
});
</script>

<style scoped>
button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #33a06f;
}
</style>
