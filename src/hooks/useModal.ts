// useModal.ts
import { ref } from "vue";
import ModalComponent from "@/components/custom/ModalComponent.vue";

export function useModal() {
  const visible = ref(false);

  // 打开弹框
  const open = () => {
    visible.value = true;
  };

  // 关闭弹框
  const close = () => {
    visible.value = false;
  };

  return {
    visible,
    open,
    close,
    Modal: ModalComponent,
  };
}
