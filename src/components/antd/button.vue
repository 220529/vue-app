<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToAbout = () => {
  router.push("/api");
  // 或者使用命名路由
  // router.push({ name: 'about' })
};
</script>

<template>
  <a-button type="primary" @click="goToAbout">Primary Button</a-button>
</template>
