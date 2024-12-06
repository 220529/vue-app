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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 接受初始时间作为props
const props = defineProps({
    initialTime: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

// 解析初始时间
const str = props.initialTime;

// 使用正则表达式匹配天、时、分、秒
const days = str.match(/(\d+)天/);
const hours = str.match(/(\d+)时/);
const minutes = str.match(/(\d+)分/);
const seconds = str.match(/(\d+)秒/);

const daysValue = days ? parseInt(days[1]) : 0;
const hoursValue = hours ? parseInt(hours[1]) : 0;
const minutesValue = minutes ? parseInt(minutes[1]) : 0;
const secondsValue = seconds ? parseInt(seconds[1]) : 0;

// 使用ref来存储当前时间
const currentTime = ref({
    days: daysValue,
    hours: hoursValue,
    minutes: minutesValue,
    seconds: secondsValue
});

let timeoutId: number | null = null;  // 用于存储setTimeout返回的定时器ID

// 每秒更新时间，优化了对象更新方式，避免不必要的对象创建
const updateTime = () => {
    currentTime.value.seconds++;
    // 秒数满60，将秒数重置为0，并使分钟数加1
    if (currentTime.value.seconds >= 60) {
        currentTime.value.seconds = 0;
        currentTime.value = {
            ...currentTime.value,
            minutes: currentTime.value.minutes + 1
        };
        // 分钟数满60，将分钟数重置为0，并使小时数加1
        if (currentTime.value.minutes >= 60) {
            currentTime.value.minutes = 0;
            currentTime.value = {
                ...currentTime.value,
                hours: currentTime.value.hours + 1
            };
            // 小时数满24，将小时数重置为0，并使天数加1
            if (currentTime.value.hours >= 24) {
                currentTime.value.hours = 0;
                currentTime.value = {
                    ...currentTime.value,
                    days: currentTime.value.days + 1
                };
            }
        }
    }
    if (timeoutId) {
        clearTimeout(timeoutId);  // 清除上一次的定时器
    }
    timeoutId = setTimeout(updateTime, 1000);  // 重新设置新的定时器，并保存新的定时器ID
};

// 在组件挂载时开始计时
onMounted(() => {
    timeoutId = setTimeout(updateTime, 1000);  // 首次调用updateTime来启动计时过程，并保存定时器ID
});

// 在组件卸载时清除定时器
onUnmounted(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);  // 如果定时器ID存在，清除定时器
        timeoutId = null;
    }
});
</script>

<style scoped lang="less">
.timer {
    font-family: 思源黑体;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    color: #17233E
}
</style>