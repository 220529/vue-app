// src/api.js
import axios from "axios";

// 获取用户列表数据
export const getUserList = () => {
  return axios.get("/api/list");
};
