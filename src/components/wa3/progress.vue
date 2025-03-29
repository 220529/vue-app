<script setup lang="ts">
import { CountTo } from "vue3-count-to";
import ProgressBar from "./progress-bar.vue";

const { item } = defineProps<{
  item: {
    amount: number;
    progress: number;
    describe: string;
    abilityIcon: string;
    amountColor: string;
    progressColor: string;
    progressBackgroundColor: string;
  };
}>();
const duration = 2;
const {
  progress,
  amount,
  describe,
  abilityIcon,
  amountColor,
  progressColor,
  progressBackgroundColor,
} = item;
</script>

<template>
  <div class="amount-detail">
    <img :src="abilityIcon" alt="" srcset="" />
    <div class="progress">
      <div class="progress-amount">
        <div>
          <img class="level" src="/wa3/2.png" alt="" srcset="" />
        </div>
        <CountTo
          class="amount"
          :startVal="0"
          :endVal="amount"
          :duration="duration * 1000"
        />
      </div>
      <ProgressBar
        :progress="progress"
        :progressColor="progressColor"
        :duration="duration"
        :progressBackgroundColor="progressBackgroundColor"
      />
      <p class="describe">{{ describe }}</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.amount-detail {
  // flex: 1;
  // min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    width: 18px;
    height: 18px;
  }
}

.progress {
  flex: 1;
  margin-left: 5px;

  .level {
    width: 46px;
  }

  .describe {
    margin-top: 3px;
    font-family: Source Han Sans;
    font-size: 12px;
    font-weight: normal;
    color: #d7c4a1;
  }

  .amount {
    font-family: Barlow Condensed;
    font-size: 14px;
    font-weight: bold;
    font-variation-settings: "opsz" auto;
    color: v-bind("amountColor");
  }

  &-amount {
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
  }
}
</style>
