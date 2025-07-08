<script setup>
import { onMounted } from "vue";

// 第一个 mounted 钩子
onMounted(() => {
  console.log("第一个 mounted 执行");
});

// 第二个 mounted 钩子
onMounted(() => {
  console.log("第二个 mounted 执行");
});

// 第三个 mounted 钩子
onMounted(() => {
  console.log("第三个 mounted 执行");
});

onMounted(async () => {
  console.log("钩子1 - 开始");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 等待1秒
  console.log("钩子1 - 结束");
});

onMounted(() => {
  console.log("钩子2 - 开始");
  console.log("钩子2 - 结束");
});
</script>

<template>
  <div>
    <p>打开浏览器控制台查看多个onMounted的执行顺序</p>
  </div>
</template>
