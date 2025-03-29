<script setup lang="ts">
import { CountTo } from "vue3-count-to";
</script>

<template>
  <div>
    <CountTo :startVal="0" :endVal="100" :duration="1000"></CountTo>
  </div>
</template>
