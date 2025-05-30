<script setup lang="ts">
import V0 from "@/components/exceljs/v0.vue";
import V1 from "@/components/exceljs/v1.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = Number(route.params.id);
console.log("id:", id);
</script>

<template>
  <V0 v-if="id === 0" />
  <V1 v-else-if="id === 1" />
</template>
