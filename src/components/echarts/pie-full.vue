<!-- 饼图：可切换数据的，带色块的饼图 -->
<template>
  <div>
    <div ref="chartRef" style="width: 300px; height: 300px"></div>
    <button @click="switchData" style="margin-top: 20px">切换数据</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

// 数据选项
const options = ref([
  {
    name: "已收款",
    data: [
      { value: 1048, name: "合同款" },
      { value: 735, name: "订金" },
      { value: 580, name: "增项款" },
      { value: 484, name: "套外款" },
      { value: 300, name: "设计费" },
      { value: 300, name: "选赔款" },
    ],
  },
  {
    name: "未收款",
    data: [
      { value: 100, name: "合同款" },
      { value: 800, name: "订金" },
      { value: 300, name: "增项款" },
      { value: 509, name: "套外款" },
      { value: 200, name: "设计费" },
      { value: 100, name: "选赔款" },
    ],
  },
]);

// 当前选中数据索引
const currentOptionIndex = ref(0);

// 图表实例和 DOM 引用
const chartInstance = ref<echarts.ECharts | null>(null);
const chartRef = ref<HTMLDivElement | null>(null);

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return;
  chartInstance.value = echarts.init(chartRef.value);
  updateChart();
};

// 更新图表数据
const updateChart = () => {
  if (!chartInstance.value) return;
  const currentOption = options.value[currentOptionIndex.value];
  chartInstance.value.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: currentOption.name,
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: currentOption.data,
      },
    ],
  });
};

// 切换数据
const switchData = () => {
  currentOptionIndex.value =
    (currentOptionIndex.value + 1) % options.value.length;
  updateChart();
};

// 挂载后初始化图表
onMounted(() => {
  initChart();
});
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #66b1ff;
}
</style>
