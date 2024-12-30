<script setup lang="ts">
import TooltipMultiple from "./TooltipMultiple.vue"
const text = "来访接待室房间都是垃圾分类:可见度撒了看附近dfsjlfjlk的上来看解开了"
</script>

<template>
  <div class="root">
    <TooltipMultiple :text="text">
      <span>{{ text }}</span>
    </TooltipMultiple>
  </div>
</template>

<style scoped lang="less">
.root {
  margin: 200px;
}
</style>