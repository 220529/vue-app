<script setup lang="ts">
import ProgressApp from "./progress-group.vue";
</script>

<template>
  <div class="designers">
    <ProgressApp />
    <ProgressApp />
    <ProgressApp />
    <ProgressApp />
    <ProgressApp />
    <ProgressApp />
  </div>
</template>

<style scoped lang="less">
.designers {
  display: grid;
  gap: 40px;
  padding: 50px 35px;
  grid-template-columns: repeat(auto-fit, minmax(386px, 1fr));
}
</style>
