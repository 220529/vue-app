<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
    <ExclamationCircleFilled color="red" style="{{ color: 'red' }}" />
    <star-two-tone two-tone-color="blue" />
  </div>
</template>

<script setup lang="ts">
import { ExclamationCircleFilled, StarTwoTone } from "@ant-design/icons-vue"
</script>
