<template>
  <button @click="exportFullExcel" :disabled="isExporting">
    {{ isExporting ? "导出中..." : "导出完整Excel" }}
  </button>
</template>

<script setup>
import ExcelJS from "exceljs";
import { ref } from "vue";
import { cellData } from "./sheet.js";

const isExporting = ref(false);

const exportFullExcel = async () => {
  if (!cellData || Object.keys(cellData).length === 0) {
    alert("没有可导出的数据");
    return;
  }

  isExporting.value = true;

  try {
    // 1. 创建工作簿
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "系统导出";
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet("合同数据");

    // 2. 准备表头和数据
    const firstDataRow = cellData[1];
    if (!firstDataRow) {
      throw new Error("数据格式不正确，缺少数据行");
    }

    // 处理表头
    const headers = [];
    const fieldMap = {};

    // 收集所有字段信息
    Object.values(firstDataRow).forEach((cell, index) => {
      const headerCell = cellData[0]?.[index];
      const fieldName = cell?.field?.replace(/\./g, "_") || `column_${index}`;

      headers.push({
        header: headerCell?.v || fieldName,
        key: fieldName,
        width: 20, // 初始宽度
      });

      fieldMap[index] = fieldName;
    });

    // 设置表头
    worksheet.columns = headers;

    // 设置表头样式
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFD9D9D9" }, // 浅灰色背景
      };
      cell.font = {
        bold: true,
        color: { argb: "FF000000" }, // 黑色加粗
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // 处理数据行
    Object.keys(cellData).forEach((rowKey) => {
      const rowNum = Number(rowKey);
      if (rowNum === 0) return; // 跳过表头行

      const rowData = cellData[rowKey];
      const dataRow = {};

      Object.entries(rowData).forEach(([colIndex, cell]) => {
        const fieldName = fieldMap[colIndex];
        if (fieldName) {
          dataRow[fieldName] = formatCellValue(cell);
        }
      });

      const addedRow = worksheet.addRow(dataRow);

      // 设置数据行样式
      addedRow.eachCell((cell) => {
        const colIndex = cell.col - 1;
        const originalCell = rowData[colIndex];

        if (originalCell?.t === 2) {
          // 数字类型
          cell.numFmt =
            originalCell?.s === "Percent_Formatter" ? "0.00%" : "#,##0.00";
        }

        if (originalCell?.locked) {
          cell.protection = { locked: Boolean(originalCell.locked) };
        }
      });
    });

    // 自动调整列宽（更智能的计算方式）
    worksheet.columns.forEach((column) => {
      let maxLength = column.header?.length || 0;

      // 检查数据行
      worksheet.eachRow({ includeEmpty: false }, (row) => {
        const cell = row.getCell(column.number);
        if (cell.value !== null && cell.value !== undefined) {
          const cellLength = cell.text?.length || 0;
          if (cellLength > maxLength) {
            maxLength = cellLength;
          }
        }
      });

      // 设置合理宽度（限制最小和最大宽度）
      column.width = Math.min(Math.max(maxLength + 2, 10), 50);
    });

    // 保护工作表（允许编辑未锁定的单元格）
    worksheet.protect("", {
      selectLockedCells: true,
      selectUnlockedCells: true,
      formatCells: true,
      formatColumns: true,
      formatRows: true,
    });

    // 导出文件
    const buffer = await workbook.xlsx.writeBuffer();
    downloadExcel(
      buffer,
      `合同数据_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  } catch (error) {
    console.error("导出Excel失败:", error);
    alert(`导出失败: ${error.message}`);
  } finally {
    isExporting.value = false;
  }
};

// 格式化单元格值
const formatCellValue = (cell) => {
  if (cell.f) return { formula: cell.f }; // 公式
  if (cell.t === 2) return Number(cell.v); // 数字类型
  return cell.v; // 默认返回原始值
};

// 下载Excel文件
const downloadExcel = (buffer, fileName) => {
  try {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    // 延迟清理内存
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error("下载文件失败:", error);
    throw new Error("文件下载失败");
  }
};
</script>

<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
