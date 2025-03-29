<template>
  <div>
    <h2>用户列表</h2>
    <ul v-if="users.length">
      <li
        v-for="user in users"
        :key="user.id"
        v-track="{ ...trackData, id: user.id }"
      >
        {{ user.name }} - {{ user.age }} 岁 - {{ user.city }}
      </li>
    </ul>
    <p v-else>加载中...</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { getUserList } from "@/api"; // 引入 API

export default {
  name: "ListComponent",
  setup() {
    const users = ref([]);

    const fetchData = async () => {
      try {
        const response = await getUserList(); // 使用从 api.js 引入的方法
        users.value = response.data.data;
      } catch (error) {
        console.error("数据加载失败:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    const trackData = {
      eventTypes: ["show", "click"],
      aid: "aid",
      pid: "pid",
      content: "用户列表",
    };

    return {
      users,
      trackData,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
