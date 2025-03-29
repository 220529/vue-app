<template>
    <div class="switch-btn" @click="handler">
        <span v-if="!value">不含提成</span>
        <span v-else>含提成</span>
        <img src="http://erp.ttzz.cn/public/upload/file/13/0/2024-12-04-02-13-44-db06ea70-cf55-49bd-910c-fd1ca4e26146-100x100.png"
            alt="" srcset="" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// 定义props，接收外部传入的value值
const { value, handler } = defineProps({
    value: Boolean,
    handler: Function
});
</script>

<style scoped>
.switch-btn {
    width: 150px;
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