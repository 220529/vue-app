import Mock from "mockjs";

Mock.mock("/api/list", "get", {
  "data|20": [
    {
      "id|+1": 1,
      name: "@name",
      "age|18-60": 1,
      city: "@city",
    },
  ],
});

// console.log("Mock.js 已拦截 /api/list 请求并返回数据");
