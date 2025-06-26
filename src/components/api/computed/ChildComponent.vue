<!-- ChildComponent.vue -->
<script setup lang="ts">
import { defineProps } from "vue";

const { data } = defineProps({
  data: Object, // 接收父组件传递的对象
});
</script>

<template>
  <div>
    <p>Double Count: {{ data?.doubleCount }}</p>
    <p>Upper Text: {{ data?.upperText }}</p>
  </div>
</template>
