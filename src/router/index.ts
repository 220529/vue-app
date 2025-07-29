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
  {
    path: "/vxe-table/:id",
    name: "vxe-table",
    component: () => import("@/components/vxe-table/index.vue"),
  },
  {
    path: "/env",
    name: "env",
    component: () => import("@/components/env/index.vue"),
  },
  {
    path: "/element-plus",
    name: "element-plus",
    component: () => import("@/components/element-plus/index.vue"),
    children: [
      {
        path: "date",
        name: "element-plus-date",
        component: () => import("@/components/element-plus/date.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 history 模式（需服务器支持）
  routes,
});

export default router;
