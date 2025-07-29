<template>
  <div class="element-plus-demo">
    <h1>Element Plus 组件测试</h1>
    <div class="nav-links">
      <router-link to="/element-plus/date" class="nav-link">
        日期选择器测试
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
// Element Plus 主页面
</script>

<style scoped>
.element-plus-demo {
  padding: 20px;
}

.nav-links {
  margin: 20px 0;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-right: 10px;
}

.nav-link:hover {
  background-color: #337ecc;
}
</style>
