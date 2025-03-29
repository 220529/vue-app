<template>
  <div>
    <h1>父组件</h1>
    <p>父组件的数据：{{ parentMessage }}</p>
    <input v-model="parentMessage" placeholder="修改父组件数据" />
    <button @click="updateMessage">父组件点击修改数据</button>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const parentMessage = ref("这是父组件的初始数据");

const updateMessage = () => {
  parentMessage.value = "父组件已点击，数据被修改！";
};
</script>
