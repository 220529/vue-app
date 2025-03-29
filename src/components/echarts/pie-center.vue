<template>
  <div id="chart" ref="chartRef" style="width: 500px; height: 400px"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);

    const option = {
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          // 动态显示选中项的信息
          return `
            <div style="text-align: center;">
              <span style="font-weight: bold; color: #333;">${params.data.name}</span><br/>
              <span style="color: #999;">占比: ${params.percent}%</span><br/>
              <span style="color: #666;">金额: ${params.value}</span>
            </div>
          `;
        },
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "center",
            formatter: () => {
              return "";
            },
          },
          emphasis: {
            label: {
              show: true,
              formatter: (params: any) => {
                return `{value|${params.value}}\n{name|${params.name}}`;
              },
              rich: {
                value: {
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#17233E",
                },
                name: {
                  fontSize: 14,
                  color: "#9E9E9E",
                },
              },
            },
          },
          data: [
            { value: 1048, name: "定金" },
            { value: 735, name: "合同款" },
            { value: 580, name: "设计费" },
            { value: 484, name: "套外款" },
            { value: 300, name: "选配款" },
            { value: 200, name: "增项款" },
          ],
        },
      ],
    };

    chart.setOption(option);
  }
});
</script>

<style scoped>
#chart {
  width: 100%;
  height: 100%;
}
</style>
