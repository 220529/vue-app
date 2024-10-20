// src/directives/v-log.ts
import { Directive } from "vue";

const vLog: Directive = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("元素出现在视口:", el);
          observer.unobserve(el);
        }
      });
    });
    observer.observe(el);
  },
  unmounted(el) {
    // 这里不需要再次声明 observer
  },
};

export default vLog;
