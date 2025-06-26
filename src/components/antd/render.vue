<script setup lang="ts">
import { ref, h } from "vue";
import { Steps, Step, Tooltip } from "ant-design-vue";
// @ts-ignore
import type { ProgressDotRender } from "ant-design-vue/es/steps/props";

interface StepItem {
  id: number;
  title: string;
  description: string;
  status?: "wait" | "process" | "finish" | "error";
}

const orderSteps = ref<StepItem[]>([
  {
    id: 1,
    title: "创建订单",
    description: "2024-08-11 21:40:56",
    status: "finish",
  },
  {
    id: 2,
    title: "转订单",
    description: "2024-08-12 14:20:15",
    status: "finish",
  },
  {
    id: 3,
    title: "确认订单",
    description: "进行中",
    status: "process",
  },
  {
    id: 4,
    title: "锁定订单",
    description: "暂未锁单",
    status: "wait",
  },
]);

const currentStep = ref(2); // 当前步骤索引 (0-based)

// 使用正确的 ProgressDotRender 类型
const customProgressDot: ProgressDotRender = (dot: any, { index }: any) => {
  return h(
    Tooltip,
    {
      title: `步骤 ${index + 1}: ${orderSteps.value[index].title}`,
      overlayStyle: { maxWidth: "200px" },
    },
    { default: () => dot }
  );
};
</script>

<template>
  <div class="final-card">
    <Steps
      :current="currentStep"
      :progress-dot="customProgressDot"
      label-placement="vertical"
    >
      <Step
        v-for="step in orderSteps"
        :key="step.id"
        :title="step.title"
        :description="step.description"
        :status="step.status"
      />
    </Steps>
  </div>
</template>

<style scoped>
.final-card {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
