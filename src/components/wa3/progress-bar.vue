<script setup lang="ts">

interface Props {
  progress: number; // 进度
  duration: number; // 过度时间
  progressColor: string; // 进度条色值
  progressBackgroundColor: string // 进度条底色
}

const {progress, duration, progressColor, progressBackgroundColor} = defineProps<Props>()
</script>

<template>
  <div class="progress-wrapper">
    <div class="progress-space" />
    <div class="progress-bar">
      <div class="progress-bar-chunk">
        <div class="progress-bar-widget" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.progress {
  width: 100%;
  height: 10px;
  &-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-space {
    width: 2px;
    height: 10px;
    background-color: v-bind('progressBackgroundColor');
  }
}

.progress-bar {
  flex: 1;
  height: 10px;
  padding-left: 2px;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 2px;

  &-chunk {
    width: 100%;
    height: 100%;
    border: 2px solid v-bind('progressBackgroundColor');
    left: -5px;
    position: relative;
    background-color: white;
    box-sizing: border-box;
    transform: skewX(-20deg);
  }

  &-widget {
    width: 0%;
    height: 100%;
    background: v-bind('progressColor');
    position: absolute;
    animation: fillProgress v-bind('duration + "s"') ease-out forwards;
  }
}

@keyframes fillProgress {
  from {
    width: 0%;
  }

  to {
    width: v-bind('progress + "%"');
  }
}
</style>