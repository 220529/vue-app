<script setup lang="ts">
// 直接访问 Vite 环境变量
const envVariables = {
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  // 打印所有环境变量（注意：只包含 VITE_ 前缀的变量）
  ALL_VITE_ENV: JSON.stringify(
    Object.entries(import.meta.env).filter(([key]) => key.startsWith("VITE_")),
    null,
    2
  ),
};
</script>

<template>
  <div class="env-test">
    <h2>环境变量测试</h2>

    <div class="env-grid">
      <div>
        <h3>当前环境</h3>
        <pre>{{ envVariables.MODE }}</pre>
      </div>

      <div>
        <h3>API 基础地址</h3>
        <pre>{{ envVariables.API_BASE_URL || "未设置" }}</pre>
      </div>

      <div>
        <h3>应用名称</h3>
        <pre>{{ envVariables.APP_NAME || "未设置" }}</pre>
      </div>
    </div>

    <div class="full-env">
      <h3>所有 VITE_ 环境变量</h3>
      <pre>{{ envVariables.ALL_VITE_ENV }}</pre>
    </div>
  </div>
</template>

<style scoped>
.env-test {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.env-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

h3 {
  color: #42b983;
  margin-top: 0;
}

pre {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

.full-env pre {
  max-height: 300px;
  overflow-y: auto;
}
</style>
