<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <v-select v-model="startYear" :items="availableYears" label="开始年份"
                    @update:model-value="handleYearChange('start')"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="endYear" :items="availableYears" label="结束年份" :disabled="startYear === null"
                    @update:model-value="handleYearChange('end')"></v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6">
                <v-select v-model="startMonth" :items="availableStartMonths" label="开始月份" item-title="text"
                    item-value="value" :disabled="startYear === null"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="endMonth" :items="availableEndMonths" label="结束月份" item-title="text"
                    item-value="value" :disabled="endYear === null || (startYear === endYear && startMonth === null)"
                    :error-messages="dateRangeError"></v-select>
            </v-col>
        </v-row>

        <v-alert v-if="dateRangeError" type="error" class="mt-4">
            {{ dateRangeError }}
        </v-alert>

        <v-alert v-if="isValidRange" type="success" class="mt-4">
            已选择: {{ formattedDateRange }}
        </v-alert>
    </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 年份范围 (当前年份前后10年)
const currentYear = new Date().getFullYear()
const availableYears = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i)

// 月份数据
const months = [
    { text: '一月', value: 1 },
    { text: '二月', value: 2 },
    { text: '三月', value: 3 },
    { text: '四月', value: 4 },
    { text: '五月', value: 5 },
    { text: '六月', value: 6 },
    { text: '七月', value: 7 },
    { text: '八月', value: 8 },
    { text: '九月', value: 9 },
    { text: '十月', value: 10 },
    { text: '十一月', value: 11 },
    { text: '十二月', value: 12 }
]

const startYear = ref<number | null>(null)
const startMonth = ref<number | null>(null)
const endYear = ref<number | null>(null)
const endMonth = ref<number | null>(null)

// 计算可用的开始月份 (全年)
const availableStartMonths = computed(() => months)

// 计算可用的结束月份 (根据开始日期)
const availableEndMonths = computed(() => {
    if (!endYear.value) return months

    // 如果跨年了，所有月份都可用
    if (startYear.value && endYear.value > startYear.value) {
        return months
    }

    // 同年，只能选择大于等于开始月份的月份
    if (startMonth.value) {
        return months.filter(month => month.value >= startMonth.value!)
    }

    return months
})

// 验证日期范围
const dateRangeError = computed(() => {
    if (!startYear.value || !startMonth.value || !endYear.value || !endMonth.value) {
        return ''
    }

    // 结束年份早于开始年份
    if (endYear.value < startYear.value) {
        return '结束年份不能早于开始年份'
    }

    // 同年但结束月份早于开始月份
    if (endYear.value === startYear.value && endMonth.value < startMonth.value) {
        return '同年时结束月份不能早于开始月份'
    }

    return ''
})

// 判断是否有效范围
const isValidRange = computed(() => {
    return startYear.value !== null &&
        startMonth.value !== null &&
        endYear.value !== null &&
        endMonth.value !== null &&
        !dateRangeError.value
})

// 格式化显示日期范围
const formattedDateRange = computed(() => {
    if (!isValidRange.value) return ''

    return `${startYear.value}年${startMonth.value}月 - ${endYear.value}年${endMonth.value}月`
})

// 处理年份变化
const handleYearChange = (type: 'start' | 'end') => {
    if (type === 'start') {
        // 重置开始月份
        startMonth.value = null

        // 如果结束年份早于新选的开始年份，重置结束年份和月份
        if (endYear.value && endYear.value < startYear.value!) {
            endYear.value = null
            endMonth.value = null
        }
    } else {
        // 如果结束年份早于开始年份，重置结束月份
        if (startYear.value && endYear.value! < startYear.value) {
            endMonth.value = null
        }

        // 如果同年且结束月份早于开始月份，重置结束月份
        if (startYear.value === endYear.value &&
            startMonth.value &&
            endMonth.value &&
            endMonth.value < startMonth.value) {
            endMonth.value = null
        }
    }
}
</script>