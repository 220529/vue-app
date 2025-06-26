<template>
  <a-form :model="formState" :label-col="labelCol" layout="inline">
    <a-form-item label="合同号" name="number" enter-button="Search">
      <a-input-search
        v-model:value="formState.number"
        enter-button="查询"
        style="width: 200px"
        @search="onSearch"
      />
    </a-form-item>
    <a-form-item label="客户姓名" name="name" enter-button="Search">
      <a-input-search
        v-model:value="formState.name"
        enter-button="查询"
        style="width: 200px"
        @search="onSearch"
      />
    </a-form-item>
    <a-form-item label="联系方式" name="mobile" enter-button="Search">
      <a-input-search
        v-model:value="formState.mobile"
        enter-button="查询"
        style="width: 200px"
        @search="onSearch"
      />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { Form, Input, Button } from 'ant-design-vue';
// const { Option } = Select;
const labelCol = { style: { width: "80px" } };
const formState = ref({
  number: "",
  name: "",
  mobile: "",
});

const onSearch = (e: any) => {
  console.log("onSearch", formState, e);
};
</script>

<style scoped></style>
