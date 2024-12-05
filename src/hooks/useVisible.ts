// useVisible.ts
import { ref } from 'vue'

export function useVisible() {
  const visible = ref(false)

  // 打开
  const openVisible = () => {
    visible.value = true
  }

  // 关闭
  const closeVisible = () => {
    visible.value = false
  }

  const swichVisible = () => {
    visible.value = !visible.value
  }

  return {
    visible,
    openVisible,
    closeVisible,
    swichVisible
  }
}
