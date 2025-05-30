import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "wujie",
    component: () => import("@/pages/wujie.vue"), // 懒加载
  },
  {
    path: "/api",
    name: "api",
    component: () => import("@/components/api/index.vue"),
  },
  {
    path: "/univer",
    name: "univer",
    component: () => import("@/components/univer/index.vue"),
  },
  {
    path: "/excel/:id",
    name: "excel",
    component: () => import("@/components/exceljs/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 history 模式（需服务器支持）
  routes,
});

export default router;
