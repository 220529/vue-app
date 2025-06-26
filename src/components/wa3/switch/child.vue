<template>
  <div class="switch-btn" @click="handleClick">
    <span v-if="!modelValue">不含提成</span>
    <span v-else>含提成</span>
    <img
      src="http://erp.ttzz.cn/public/upload/file/13/0/2024-12-04-02-13-44-db06ea70-cf55-49bd-910c-fd1ca4e26146-100x100.png"
      alt="切换状态"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from "vue";

// 定义props
interface Props {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

// 定义emits
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

// 处理点击事件
const handleClick = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
  emit("change", newValue);
};
</script>

<style scoped>
.switch-btn {
  width: 150px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  padding: 1px 5px;
  line-height: 17px;
  border-radius: 4px;
  background-color: rgba(49, 117, 251, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(49, 117, 251, 0.2);
  }

  span {
    font-family: "Source Han Sans", sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-variation-settings: "opsz" auto;
    color: #3175fb;
  }

  img {
    margin-left: 2px;
    width: 14px;
    height: 14px;
    object-fit: contain;
  }
}
</style>
