import { createApp } from "vue";
import VueLazyload from "vue-lazyload";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#3175FB",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    "label-green": "#83C447",
    error: "#B00020",
    "error-0001": "#FF5B58",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    "label-orange": "#FF8400",
    blue: "#3175FB",
    "text-1": "#17233E",
    "text-2": "#58637D",
    "text-3": "#BAC0CD",
  },
};

import VxeUIAll from "vxe-pc-ui";
import "vxe-pc-ui/lib/style.css";
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

import "./reset.css";
import "./style.css";
import App from "./App.vue";
import "./mock";
import "./mock/customer.js";
import directives from "./directives";

const vuetify = createVuetify({
  components: {
    ...components,
    // VDataTableVirtual,
    // VDatePicker,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

const app = createApp(App);

// 全局注册指令
Object.entries(directives).forEach(([name, directive]) => {
  app.directive(name.replace("v-", ""), directive);
});

app.use(vuetify);

app.use(VxeUIAll);
app.use(VxeUITable);

app.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（视口高度的比例）
  error: "https://lagou-zhaopin-fe.lagou.com/activities/imgs/6.webp",
  loading: "https://lagou-zhaopin-fe.lagou.com/activities/imgs/loading.gif",
  attempt: 1, // 尝试加载的次数
});

app.mount("#app");
