<template>
  <CustomModal
    title="自定义标题"
    @cancel="closeModal"
    v-model:visible="isModalVisible"
  >
    <p>弹框内容</p>
  </CustomModal>
  <button @click="openModal">打开弹框</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomModal from "./CustomModal.vue";

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  console.log("ddd");
  isModalVisible.value = false;
};
</script>
