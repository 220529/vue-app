<template>
  <div>
    <!-- 表格 -->
    <a-table
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :row-key="'序号'"
      bordered
    />
    <!-- 分页 -->
    <a-pagination
      :current="currentPage"
      :page-size="pageSize"
      :total="total"
      show-total="total => `总计 ${total} 条`"
      show-size-changer
      @change="handlePageChange"
      @showSizeChange="handlePageSizeChange"
      style="margin-top: 16px; text-align: right;"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

// 定义表格数据类型
interface TableData {
  序号: number;
  修改信息类型: string;
  修改具体内容: string;
  订单状态: string;
  修改原因: string;
  操作人: string;
  修改时间: string;
}

// 表格数据和状态
const data = ref<TableData[]>([]);
const total = ref<number>(0);
const loading = ref<boolean>(false);
const currentPage = ref<number>(1);
const pageSize = ref<number>(5);

// 表格列定义
const columns = [
  {
    title: "序号",
    dataIndex: "序号",
    key: "序号",
  },
  {
    title: "修改信息类型",
    dataIndex: "修改信息类型",
    key: "修改信息类型",
  },
  {
    title: "修改具体内容",
    dataIndex: "修改具体内容",
    key: "修改具体内容",
  },
  {
    title: "订单状态",
    dataIndex: "订单状态",
    key: "订单状态",
  },
  {
    title: "修改原因",
    dataIndex: "修改原因",
    key: "修改原因",
  },
  {
    title: "操作人",
    dataIndex: "操作人",
    key: "操作人",
  },
  {
    title: "修改时间",
    dataIndex: "修改时间",
    key: "修改时间",
  },
];

// 获取数据的方法
const fetchData = async (page: number = currentPage.value) => {
  loading.value = true;
  try {
    const response = await axios.get(`/api/data?page=${page}`);
    data.value = response.data.data;
    total.value = response.data.total;
    currentPage.value = page;
  } catch (error) {
    console.error("获取数据失败", error);
  } finally {
    loading.value = false;
  }
};

// 处理分页切换
const handlePageChange = (page: number) => {
  fetchData(page);
};

// 处理每页条数切换
const handlePageSizeChange = (current: number, size: number) => {
  pageSize.value = size;
  fetchData(1); // 每次调整条数时，重置到第一页
};

// 页面加载时获取初始数据
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* 添加一些简单的样式 */
</style>
