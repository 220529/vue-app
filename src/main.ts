import { createApp } from "vue";
import VueLazyload from "vue-lazyload";

import "./reset.css";
import "./style.css";
import App from "./App.vue";
import "./mock";
import directives from "./directives";

const app = createApp(App);

// 全局注册指令
Object.entries(directives).forEach(([name, directive]) => {
  app.directive(name.replace("v-", ""), directive);
});

app.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（视口高度的比例）
  error: "https://lagou-zhaopin-fe.lagou.com/activities/imgs/6.webp",
  loading: "https://lagou-zhaopin-fe.lagou.com/activities/imgs/loading.gif",
  attempt: 1, // 尝试加载的次数
});

app.mount("#app");
