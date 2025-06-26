<template>
  <CountUpTimer :initialTime="diffTime" color="red" disabled />
</template>

<script setup lang="ts">
import { useTimeDiff } from "@/hooks/useTimeDiff";
// const initialTime = { days: 0, hours: 0, minutes: 0, seconds: 59 };
const diffTime = useTimeDiff("2024-11-01T01:11:47.000Z");
// const diffTime = useTimeDiff("2024-12-10T08:52:05.000Z", "2024-12-10T08:53:04.000Z");
console.log("diffTime", diffTime);
import CountUpTimer from "./CountUpTimer.vue";
</script>
