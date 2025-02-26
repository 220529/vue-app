<template>
    <div>
      <h2>子组件</h2>
      <p>从父组件接收到的数据：{{ message }}</p>
      <p>监听到的最新数据：{{ latestMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  // 接收父组件传递的 prop
  const props = defineProps({
    message: String,
  });
  
  // 用于存储监听到的最新数据
  const latestMessage = ref(props.message);
  
  // 监听父组件传递的 message
  watch(
    () => props.message,
    (newValue) => {
      console.log("父组件的值发生变化：", newValue);
      latestMessage.value = newValue;
    }
  );
  </script>
  