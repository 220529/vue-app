<!-- 柱状图：柱子自定义色值，可切换数据 -->
<template>
  <div class="container">
    <button @click="toggleDataSource">切换数据源</button>
    <ul class="chunks">
      <li>主材</li>
      <li>基材</li>
    </ul>
    <div ref="chartRef" style="width: 800px; height: 400px" class="aaa"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import type { BarSeriesOption } from "echarts";

// 辅助函数，用于计算文本的宽度（简单模拟，实际情况可能更复杂）
function getTextWidth(text: string, fontSize: number): number {
  return text.length * fontSize * 0.6; // 简单估算，不同字体可能有差异
}

const chartRef = ref<HTMLElement | null>(null);
// 定义两组不同的数据源
const options = ref([
  [
    { name: "北京金隅天坛家具股份有限公司", sales: 3, type: "main" },
    { name: "博洛尼智能家居（北京）有限公司", sales: 5, type: "main" },
    { name: "北京好材多多科技有限公司", sales: 9, type: "sub" },
    { name: "北京阿尔倍娜家居有限公司", sales: 2.9, type: "main" },
    { name: "廊坊圣宏达鑫门业有限公司", sales: 7, type: "sub" },
    { name: "北京港典建筑装饰有限公司", sales: 2, type: "sub" },
  ],
  [
    { name: "新公司A", sales: 4, type: "main" },
    { name: "新公司B", sales: 6, type: "main" },
    { name: "新公司C", sales: 8, type: "sub" },
    { name: "新公司D", sales: 3.5, type: "main" },
    { name: "新公司E", sales: 5.5, type: "sub" },
    { name: "新公司F", sales: 1.5, type: "sub" },
  ],
]);
// 当前选中数据索引
const currentOptionIndex = ref(0);
// 用于保存图表实例
let myChart: echarts.ECharts | null = null;

const toggleDataSource = () => {
  currentOptionIndex.value =
    (currentOptionIndex.value + 1) % options.value.length;
  updateChart();
};

const updateChart = () => {
  if (!chartRef.value) {
    console.error("图表容器DOM元素不存在，无法更新图表，请检查DOM引用是否正确");
    return;
  }
  if (!myChart) {
    myChart = echarts.init(chartRef.value);
  }
  const currentOption = options.value[currentOptionIndex.value];

  const xAxisData = currentOption.map((item) => item.name);
  const yAxisData = currentOption.map((item) => item.sales);
  const typeData = currentOption.map((item) => item.type);

  const seriesData: BarSeriesOption[] = [
    {
      type: "bar",
      barWidth: "20%",
      data: yAxisData,
      itemStyle: {
        color: function (params: any) {
          const currentType = typeData[params.dataIndex];
          if (currentType === "main") {
            return "#3175FB";
          } else if (currentType === "sub") {
            return "#65CCBE";
          }
          return "red";
        },
      },
    },
  ];

  const option: echarts.EChartsOption = {
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLabel: {
        formatter: function (value) {
          let str = "";
          let width = 0;
          let fontSize = 12; // 假设字体大小为12px，可根据实际调整
          let maxWidth: number = 50; // 设定最大宽度为80px，超出此宽度换行
          for (let i = 0; i < value.length; i++) {
            let char = value.charAt(i);
            width += getTextWidth(char, fontSize); // 计算每个字符增加的宽度
            if (width > maxWidth) {
              str += "\n";
              width = getTextWidth(char, fontSize);
            }
            str += char;
          }
          return str;
        },
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
    },
    series: seriesData,
    // @ts-ignore
    tooltip: {
      trigger: "axis",
      // @ts-ignore
      formatter: (params: echarts.CallbackDataParams[]) => {
        let tip = "";
        params.forEach((param) => {
          const value = param.value;
          const productName = xAxisData[param.dataIndex];
          const type = typeData[param.dataIndex];
          const title = type === "main" ? "主材" : "基材";
          tip += productName + " - " + title + ": ¥" + value * 10000;
        });
        return tip;
      },
    },
  };
  myChart.setOption(option);
};

onMounted(() => {
  updateChart();
});
</script>
<style scoped lang="less">
.container {
  position: relative;

  .chunks {
    z-index: 99;
    top: 20px;
    left: 300px;
    position: absolute;

    display: flex;
    flex-direction: row;

    li {
      font-family: Barlow Condensed;
      font-size: 12px;
      font-weight: normal;
      line-height: 14px;
      letter-spacing: 0px;

      font-variation-settings: "opsz" auto;
      color: #17233e;
      position: relative;

      &:first-child {
        &::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #3175fb;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          position: absolute;
        }
      }

      &:not(:first-child) {
        margin-left: 40px;

        &::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #65ccbe;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          position: absolute;
        }
      }
    }
  }
}
.aaa {
  transform: scale(0.8);
}
</style>
