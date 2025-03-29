<!-- ModalComponent.vue -->
<template>
  <Modal
    v-model:visible="visible"
    width="80vw"
    height="80vh"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <slot></slot>
    <!-- 插槽，用于渲染子组件内容 -->
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Modal } from "ant-design-vue";

// 接收父组件传递的 prop
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  "onUpdate:visible": {
    type: Function,
    required: true,
  },
});

// 通过 prop 绑定 visible 状态
const visible = ref(props.visible);

// 处理取消
const handleCancel = () => {
  props["onUpdate:visible"](false); // 关闭弹框
};

// 处理确定
const handleOk = () => {
  props["onUpdate:visible"](false); // 关闭弹框
};

// 监听 visible prop 的变化来更新本地的 visible 状态
watch(
  () => props.visible,
  (newVal: boolean) => {
    visible.value = newVal;
  }
);
</script>
