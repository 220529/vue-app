<template>
  <div id="chart" style="width: 500px; height: 400px"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  const chartDom = document.getElementById("chart")!;
  const myChart = echarts.init(chartDom);

  const option = {
    // title: {
    //   text: "签单金额（万元）",
    //   left: "center"
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["设计部", "渠道部"],
      bottom: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "北京城外城店",
        "北京安贞店",
        "其他店铺1",
        "其他店铺2",
        "其他店铺3",
        "其他店铺4",
        "其他店铺5",
        "其他店铺6",
        "其他店铺7",
      ],
      axisLabel: {
        interval: 0, // 每个标签都显示
        rotate: 25, // 避免文字重叠
      },
    },
    yAxis: {
      type: "value",
      name: "供应商结算（万元）",
      nameTextStyle: {
        // 设置 y 轴名称的样式，这里是向下偏移10像素（通过 padding 属性），字体大小为14px，颜色为黑色
        padding: [0, 0, 10, 0],
        fontSize: 14,
        color: "black",
      },
      axisLine: {
        show: true, // 显示 Y 轴的轴线
        lineStyle: {
          color: "#333", // 设置轴线的颜色
          width: 2, // 设置轴线的宽度
        },
      },
    },
    series: [
      {
        name: "设计部",
        type: "bar",
        data: [30, 13.2, 10, 8, 15, 20, 25, 30, 18],
        barWidth: 25, // 固定柱子宽度
      },
      {
        name: "渠道部",
        type: "bar",
        data: [20, 10.83, 8, 6, 12, 18, 22, 28, 15],
        barWidth: 25,
      },
    ],
    dataZoom: [
      {
        type: "inside", // 内部滑动模式
        start: 0, // 初始显示 0%
        end: 50, // 初始显示 50%
        moveOnMouseMove: true, // 启用鼠标拖拽
        zoomOnMouseWheel: false, // 禁用鼠标滚轮缩放
        preventDefaultMouseMove: true, // 防止默认事件
      },
    ],
  };

  myChart.setOption(option);

  // 适配窗口大小变化
  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
</script>
<style>
#chart {
  margin: 50px;
}
</style>
