// src/directives/v-track.ts
import { Directive } from "vue";
import trackObserver from "./TrackObserver";

const vTrack: Directive = {
  mounted(el, binding) {
    trackObserver.observe(el, binding.value || {});
  },
  beforeUnmount(el) {
    // 移除观察器
    trackObserver.unobserve(el);
  },
};

export default vTrack;
