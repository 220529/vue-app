// src/directives/index.ts
import { Directive } from "vue";
import vLog from "./v-log";
import vTrack from "./v-track";

// 使用 Record 类型来声明指令
const directives: Record<string, Directive> = {
  "v-log": vLog,
  "v-track": vTrack,
};

export default directives;
