<template>
  <div>
    <p>Public Data: {{ publicData }}</p>
    <p>Private Data: {{ privateData }}</p>
    <button @click="publicMethod">Public Method</button>
    <button @click="privateMethod">Private Method</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const publicData = ref("This is public data");
const privateData = ref("This is private data");

const publicMethod = () => {
  alert("Public method called");
};

const privateMethod = () => {
  alert("Private method called");
};

// 明确暴露的内容
defineExpose({
  publicData,
  publicMethod,
});
</script>
