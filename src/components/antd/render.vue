<script setup lang="ts">
import { ref, h } from 'vue';
import { Steps, Tooltip } from 'ant-design-vue';

const orderSteps = [
  {
    id: 1,
    title: "创建订单",
    description: "2024-08-11 21:40:56",
  },
  {
    id: 2,
    title: "转订单",
    description: "2024-08-12 14:20:15",
  },
  {
    id: 3,
    title: "确认订单",
    description: "进行中",
  },
  {
    id: 4,
    title: "锁定订单",
    description: "暂未锁单",
  },
];

const currentStep = ref(2); // 当前步骤

// 自定义 progressDot
const customProgressDot = (dot: any, { index, status }: { index: number; status: string }) =>
  h(
    Tooltip,
    { title: `步骤 ${index + 1}: ${orderSteps[index].title}` },
    { default: () => dot }
  );
</script>

<template>
  <div class="final-card">
    <Steps
      :current="currentStep"
      :progressDot="customProgressDot"
      label-placement="vertical"
    >
      <a-step
        v-for="step in orderSteps"
        :key="step.id"
        :title="step.title"
        :description="step.description"
      />
    </Steps>
  </div>
</template>
