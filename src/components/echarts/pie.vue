<!-- 饼图：可切换数据的，环形饼图 -->
<template>
    <div class="echarts">
        <div ref="echartsRef" style="width: 120px; height: 120px;"></div>
        <div class="switch-btn" @click="switchHandler">
            <span>不含提成</span>
            <img src="http://erp.ttzz.cn/public/upload/file/13/0/2024-12-04-02-13-44-db06ea70-cf55-49bd-910c-fd1ca4e26146-100x100.png"
                alt="" srcset="">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

// 用于保存图表实例
let myChart: echarts.ECharts | null = null;
const echartsRef = ref<HTMLElement | null>(null);
const options = ref([
    [
        { value: 300, name: '利润' },
        { value: 1000 - 300, name: '成本' }
    ],
    [
        { value: 200, name: '利润' },
        { value: 1000 - 200, name: '成本' }
    ]
])

const radioValue = ref<number>(0) // 初始化选中的值
const switchHandler = () => {
    radioValue.value = radioValue.value ? 0 : 1;
}
watch(radioValue, () => {
    updateChart();
})

const updateChart = () => {
    if (!echartsRef.value) {
        console.error('图表容器DOM元素不存在，无法更新图表，请检查DOM引用是否正确');
        return;
    }
    if (!myChart) {
        myChart = echarts.init(echartsRef.value);
    }
    const currentOption = options.value[radioValue.value]
    // 配置项
    const option = {
        series: [
            {
                type: 'pie',
                radius: ['60%', '90%'],
                label: {
                    show: true,
                    position: 'center',
                    formatter: function () {
                        const total = currentOption.reduce((prev, next) => prev + next.value, 0)
                        const price = currentOption[0].value / total * 100
                        return `{price|${price}}{unit|%}\n{text|毛利率}`;
                    },
                    rich: {
                        price: {
                            fontSize: 20,
                            color: "#FF8400",
                            fontWeight: 'bold'
                        },
                        unit: {
                            fontSize: 12,
                            color: "#FF8400",
                            fontWeight: 'bold'
                        },
                        text: {
                            fontSize: 12,
                            color: '#58637D'
                        }
                    }
                },
                data: currentOption,
                itemStyle: {
                    color: function (params) {
                        if (params.name === '利润') {
                            return '#65CCBE';
                        }
                        return '#3175FB';
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
};
onMounted(() => {
    updateChart()
})

</script>

<style>
.echarts {
    width: 100px;
    margin: 100px 0 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.custom-tooltip {
    width: 110px;
}

.switch-btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    padding: 1px 5px;
    line-height: 17px;
    border-radius: 4px;
    background-color: rgba(49, 117, 251, 0.1);

    span {
        font-family: Source Han Sans;
        font-size: 12px;
        font-weight: normal;
        font-variation-settings: "opsz" auto;
        /* 品牌色 */
        color: #3175FB;
    }

    img {
        margin-left: 2px;
        width: 14px;
        height: 14px;
    }
}
</style>