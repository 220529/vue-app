<script setup lang="ts">
import { defineProps, computed } from "vue";
const { text } = defineProps<{
  text: string;
}>();
const realText = computed(() => {
  return text.split(":");
});
</script>

<template>
  <div class="tooltip-custom">
    <slot />
    <div class="tooltip-custom-root">
      <ul class="tooltip-custom-container">
        <li v-for="i in realText" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.tooltip-custom {
  cursor: pointer;
  display: inline-block;
  position: relative;

  &:hover {
    .tooltip-custom-root {
      display: block;
    }
  }

  &-root {
    // display: none;
    padding: 10px;
    border-radius: 4px;
    background: #424242;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  &-container {
    max-width: 150px;
    li {
      font-family: 思源黑体;
      font-size: 14px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: 0px;

      color: #ffffff;
    }
  }
}
</style>
