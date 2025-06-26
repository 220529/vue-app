<template>
  <div>
    <ChildComponent ref="childRef" />
    <button @click="accessPublicData">Access Public Data</button>
    <button @click="accessPrivateData">Access Private Data</button>
    <button @click="callPublicMethod">Call Public Method</button>
    <button @click="callPrivateMethod">Call Private Method</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const childRef = ref(null);

const accessPublicData = () => {
  if (childRef.value?.publicData) {
    alert(`Public Data: ${childRef.value.publicData}`);
  } else {
    alert("Cannot access publicData");
  }
};

const accessPrivateData = () => {
  if (childRef.value?.privateData) {
    alert(`Private Data: ${childRef.value.privateData}`);
  } else {
    alert("Cannot access privateData");
  }
};

const callPublicMethod = () => {
  if (childRef.value?.publicMethod) {
    childRef.value.publicMethod();
  } else {
    alert("Cannot call publicMethod");
  }
};

const callPrivateMethod = () => {
  if (childRef.value?.privateMethod) {
    childRef.value.privateMethod();
  } else {
    alert("Cannot call privateMethod");
  }
};
</script>
