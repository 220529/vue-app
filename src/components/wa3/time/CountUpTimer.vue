<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
type ComponentProps = {
  initialTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  color: string;
  disabled?: boolean
};

// 使用 defineProps 结合类型推导
const props = defineProps<ComponentProps>();

// 解析初始时间
const {initialTime} = props
// 使用ref来存储当前时间
const currentTime = ref({
  days: initialTime.days || 0,
  hours: initialTime.hours || 0,
  minutes: initialTime.minutes || 0,
  seconds: initialTime.seconds || 0,
})

let timeoutId: number | null = null // 用于存储setTimeout返回的定时器ID

// 每秒更新时间，优化了对象更新方式，避免不必要的对象创建
function updateTime() {
  currentTime.value.seconds++
  // 秒数满60，将秒数重置为0，并使分钟数加1
  if (currentTime.value.seconds >= 60) {
    currentTime.value.seconds = 0
    currentTime.value = {
      ...currentTime.value,
      minutes: currentTime.value.minutes + 1,
    }
    // 分钟数满60，将分钟数重置为0，并使小时数加1
    if (currentTime.value.minutes >= 60) {
      currentTime.value.minutes = 0
      currentTime.value = {
        ...currentTime.value,
        hours: currentTime.value.hours + 1,
      }
      // 小时数满24，将小时数重置为0，并使天数加1
      if (currentTime.value.hours >= 24) {
        currentTime.value.hours = 0
        currentTime.value = {
          ...currentTime.value,
          days: currentTime.value.days + 1,
        }
      }
    }
  }
  if (timeoutId)
    clearTimeout(timeoutId) // 清除上一次的定时器

  timeoutId = setTimeout(updateTime, 1000) // 重新设置新的定时器，并保存新的定时器ID
}

// 在组件挂载时开始计时
onMounted(() => {
    if (!props.disabled) {
        timeoutId = setTimeout(updateTime, 1000) // 首次调用updateTime来启动计时过程，并保存定时器ID
    }
})

// 在组件卸载时清除定时器
onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId) // 如果定时器ID存在，清除定时器
    timeoutId = null
  }
})
</script>

<template>
  <span class="timer">
    <span :style="{ color }">{{ currentTime.days.toString().padStart(2, '0') }}</span>
    <span>天</span>
    <span :style="{ color }">{{ currentTime.hours.toString().padStart(2, '0') }}</span>
    <span>时</span>
    <span :style="{ color }">{{ currentTime.minutes.toString().padStart(2, '0') }}</span>
    <span>分</span>
    <span :style="{ color }">{{ currentTime.seconds.toString().padStart(2, '0') }}</span>
    <span>秒</span>
  </span>
</template>

<style scoped lang="less">
.timer {
    font-family: 思源黑体;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    color: #17233E
}
</style>
