<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(tableData[1])">
        切换第二行选中
      </vxe-button>
      <vxe-button @click="setSelectRow([tableData[2], tableData[3]], true)">
        设置第三、四行选中
      </vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
      <vxe-button status="success" @click="getSelectEvent">获取已选</vxe-button>
    </p>

    <vxe-table
      border
      height="500"
      ref="tableRef"
      :row-config="{ isHover: true }"
      :tree-config="{}"
      :data="tableData"
      :checkbox-config="{ checkField: 'isChecked' }"
    >
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VxeUI } from "vxe-pc-ui";

const tableRef = ref();
const tableData = ref([
  {
    id: 1000,
    name: "test abc1",
    type: "mp3",
    size: 1024,
    date: "2020-08-01",
    isChecked: false,
  },
  {
    id: 1005,
    name: "Test2",
    type: "mp4",
    size: 0,
    date: "2021-04-01",
    isChecked: false,
    children: [
      {
        id: 24300,
        name: "Test3",
        type: "avi",
        size: 1024,
        date: "2020-03-01",
        isChecked: false,
      },
      {
        id: 20045,
        name: "test abc4",
        type: "html",
        size: 600,
        date: "2021-04-01",
        isChecked: false,
      },
      {
        id: 10053,
        name: "test abc96",
        type: "avi",
        size: 0,
        date: "2021-04-01",
        isChecked: false,
        children: [
          {
            id: 24330,
            name: "test abc5",
            type: "txt",
            size: 25,
            date: "2021-10-01",
            isChecked: false,
          },
          {
            id: 21011,
            name: "Test6",
            type: "pdf",
            size: 512,
            date: "2020-01-01",
            isChecked: false,
          },
          {
            id: 22200,
            name: "Test7",
            type: "js",
            size: 1024,
            date: "2021-06-01",
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    id: 23666,
    name: "Test8",
    type: "xlsx",
    size: 2048,
    date: "2020-11-01",
    isChecked: false,
  },
  {
    id: 24555,
    name: "test abc9",
    type: "avi",
    size: 224,
    date: "2020-10-01",
    isChecked: false,
  },
]);

// 查找多个 id 的行
const findRowsByIds = (data, ids) => {
  const rows = [];
  const find = (data) => {
    for (const row of data) {
      if (ids.includes(row.id)) {
        rows.push(row);
      }
      if (row.children) {
        find(row.children);
      }
    }
  };
  find(data);
  return rows;
};

onMounted(() => {
  // 默认选中 id=1000 和 id=24555 的行
  const rowsToSelect = findRowsByIds(tableData.value, [1000, 24555]);
  if (rowsToSelect.length > 0) {
    setSelectRow(rowsToSelect, true);
  }
});

const toggleSelectRow = (row) => {
  console.log("toggleSelectRow", row);
  const $table = tableRef.value;
  if ($table) {
    $table.toggleCheckboxRow(row);
  }
};
const setSelectRow = (rows, checked) => {
  const $table = tableRef.value;
  if ($table) {
    console.log("setSelectRow", rows, checked);
    $table.setCheckboxRow(rows, checked);
  }
};
const selectAllEvent = () => {
  const $table = tableRef.value;
  if ($table) {
    $table.setAllCheckboxRow(true);
  }
};
const clearSelectEvent = () => {
  const $table = tableRef.value;
  if ($table) {
    $table.clearCheckboxRow();
  }
};
const getSelectEvent = () => {
  const $table = tableRef.value;
  if ($table) {
    const selectRecords = $table.getCheckboxRecords();
    VxeUI.modal.message({
      content: `当前页勾选：${selectRecords.length} 条`,
      status: "success",
    });
  }
};
</script>
