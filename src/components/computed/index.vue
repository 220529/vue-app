<!-- ParentComponent.vue -->
<script setup lang="ts">
import { reactive, computed } from 'vue';
import ChildComponent from './ChildComponent.vue';

const state = reactive({
  count: 0,
  text: 'Hello',
});

// 定义一个响应式对象
const computedObj = computed(() => ({
  doubleCount: state.count * 2,
  upperText: state.text.toUpperCase(),
}));

function increment() {
  state.count++;
}

function changeText() {
  state.text = state.text === 'Hello' ? 'World' : 'Hello';
}
</script>

<template>
  <button @click="increment">Increment</button>
  <button @click="changeText">Change Text</button>
  <ChildComponent :data="computedObj" />
</template>
