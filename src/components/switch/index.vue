<template>
    <div id="app">
      <SwitchBtn :value="visible" :handler="switchHandler" />
    </div>
  </template>
  
  <script setup lang="ts">
  import {useVisible} from "@/hooks/useVisible"
  import SwitchBtn from './child.vue';
  const { visible, swichVisible } = useVisible();
  const switchHandler = () => {
    console.log("aaa");
    swichVisible()
  }
  </script>
  
  <style>
  /* 全局样式等内容 */
  </style>