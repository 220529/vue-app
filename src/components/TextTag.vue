<template>
  <span :class="['tag', `${color}`, size === 'large' ? 'large' : 'small']">
    {{ text }}
  </span>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "small"
  }
});
</script>

<style scoped lang="less">
.tag {
  border-radius: 4px;
  font-family: 思源黑体;
  font-weight: normal;
  display: inline-block;

  &.blue {
    /* 品牌色 */
    color: #3175FB;
    background-color: rgba(49, 117, 251, 0.2);
  }

  &.small {
    font-size: 12px;
    padding: 0 5px;
    line-height: 19px;
  }

  &.large {
    font-size: 14px;
    padding: 0 10px;
    line-height: 22px;
  }
}
</style>