<template>
  <div class="counter-container">
    <p>当前值: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
    <button @click="addFive">加5</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 定义计数器
const count = ref<number>(0);

// 增加方法
const increment = () => {
  count.value++;
};

// 减少方法
const decrement = () => {
  count.value--;
};

// 重置方法
const reset = () => {
  count.value = 0;
};

// 自定义增加方法
const addFive = () => {
  count.value += 5;
};

// 可以暴露方法或属性给父组件使用
defineExpose({
  count,
  increment,
  decrement,
  reset,
});
</script>

<style scoped>
.counter-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}

button {
  margin: 5px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #33a06f;
}

p {
  font-size: 1.2em;
  margin: 15px 0;
}
</style>
