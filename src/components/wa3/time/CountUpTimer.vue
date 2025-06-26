<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

type ComponentProps = {
  initialTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  color: string;
  disabled?: boolean;
};

const props = defineProps<ComponentProps>();

const { initialTime } = props;
const currentTime = ref({
  days: initialTime.days || 0,
  hours: initialTime.hours || 0,
  minutes: initialTime.minutes || 0,
  seconds: initialTime.seconds || 0,
});

// 使用浏览器环境的 Timeout 类型
let timeoutId: ReturnType<typeof setTimeout> | null = null;

function updateTime() {
  currentTime.value.seconds++;

  if (currentTime.value.seconds >= 60) {
    currentTime.value.seconds = 0;
    currentTime.value.minutes++;

    if (currentTime.value.minutes >= 60) {
      currentTime.value.minutes = 0;
      currentTime.value.hours++;

      if (currentTime.value.hours >= 24) {
        currentTime.value.hours = 0;
        currentTime.value.days++;
      }
    }
  }

  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(updateTime, 1000);
}

onMounted(() => {
  if (!props.disabled) {
    timeoutId = setTimeout(updateTime, 1000);
  }
});

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>
<template>
  <span class="timer">
    <span :style="{ color }">
      {{ currentTime.days.toString().padStart(2, "0") }}
    </span>
    <span>天</span>
    <span :style="{ color }">
      {{ currentTime.hours.toString().padStart(2, "0") }}
    </span>
    <span>时</span>
    <span :style="{ color }">
      {{ currentTime.minutes.toString().padStart(2, "0") }}
    </span>
    <span>分</span>
    <span :style="{ color }">
      {{ currentTime.seconds.toString().padStart(2, "0") }}
    </span>
    <span>秒</span>
  </span>
</template>

<style scoped lang="less">
.timer {
  font-family: 思源黑体;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  color: #17233e;
}
</style>
