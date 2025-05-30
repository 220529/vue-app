<template>
  <button @click="exportToExcel">导出Excel</button>
</template>

<script setup>
import ExcelJS from "exceljs";
import { saveAs } from "file-saver"; // 需要安装 file-saver

const exportToExcel = async () => {
  // 1. 创建工作簿
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  // 2. 添加表头
  worksheet.columns = [
    { header: "姓名", key: "name", width: 20 },
    { header: "年龄", key: "age", width: 10 },
    { header: "部门", key: "department", width: 30 },
  ];

  // 3. 添加数据行（模拟数据）
  worksheet.addRow({ name: "张三", age: 25, department: "技术部" });
  worksheet.addRow({ name: "李四", age: 30, department: "市场部" });

  // 4. 设置样式（可选）
  worksheet.getRow(1).font = { bold: true, color: { argb: "FF0000" } };
  console.log("worksheet.columns", worksheet.columns);
  // 5. 生成Blob并下载
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "员工数据.xlsx");
};
</script>
