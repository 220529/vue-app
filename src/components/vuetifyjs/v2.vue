<template>
    <v-container>
        <v-date-picker v-model="selectedMonth" view-mode="year" hide-actions></v-date-picker>
        <v-alert v-if="selectedMonth" type="info">
            选择的月份: <strong>{{ formattedMonth }}</strong>
        </v-alert>
    </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const selectedMonth = ref<string | null>(null);

// 格式化 `YYYY-MM`
const formattedMonth = computed(() => selectedMonth.value?.slice(0, 7) ?? "");
</script>