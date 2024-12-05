<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // 获取canvas元素和绘图上下文
  const canvas = document.getElementById('progressRing');
    const ctx = canvas.getContext('2d');

    // 圆环的中心坐标
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // 圆环的半径
    const radius = 40;
    // 圆环的宽度
    const lineWidth = 10;

    // 绘制圆环背景（蓝色）
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#007BFF';
    ctx.stroke();

    // 绘制进度部分（绿色）
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (2 * Math.PI * 0.25));
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#28A745';
    ctx.stroke();

    // 绘制中间的文字
    ctx.font = "22px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const text1 = "¥10000";
    const text2 = "结算总额";
    ctx.fillText(text1, centerX, centerY - 10);
    ctx.fillText(text2, centerX, centerY + 10);
})

</script>
<template>
  <canvas id="progressRing" width="100" height="100"></canvas>
</template>