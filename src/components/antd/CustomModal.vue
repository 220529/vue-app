<template>
  <a-modal
    :title="null"
    :footer="null"
    destroyOnClose
    class="tt-a-modal"
    :open="visible"
    @cancel="handleCancel"
  >
    <div class="tt-a-modal-title">
      <span>{{ title }}</span>
      <a-button type="primary">导出</a-button>
    </div>
    <div class="tt-a-modal-content">
      <slot></slot>
      <!-- 子组件内容 -->
       <DrawerModal />
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from "vue";
import DrawerModal from "./drawer.vue"
// 定义组件的 props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  confirmLoading: {
    type: Boolean,
    default: false,
  },
});

// 定义组件的 emits
const emit = defineEmits<{
  (e: "cancel"): void;
}>();

// 事件处理方法
const handleCancel = () => {
  emit("cancel");
};

// 监听 visible 变化，进行一些副作用处理
watch(
  () => props.visible,
  (newVal) => {
    if (!newVal) {
      // 执行 Modal 关闭后的清理或逻辑
    }
  }
);
</script>

<style lang="less">
.tt-a-modal {
  width: 100% !important;
  .ant-modal-content {
    padding: 0;
    overflow: hidden;
  }
  &-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px 0 25px;
    border-bottom: #f5f6f7 1px solid;

    font-family: Source Han Sans;
    font-size: 18px;
    font-weight: 500;
    color: #17233e;
    line-height: 64px;
  }
  &-content {
    padding: 25px;
    background: #FFFFFF;
  }
}
</style>
