import { createApp } from "vue";
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

app.mount("#app");
