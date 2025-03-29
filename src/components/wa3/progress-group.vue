<script setup lang="ts">
import Progress from "./progress.vue";

const items = [
  {
    id: 1,
    amount: 2376890,
    progress: 60,
    amountColor: "#5F7EFF",
    describe: "个人产值（元）",
    abilityIcon: "/wa3/person.png",
    progressColor: "#8898DC",
    progressBackgroundColor: "#D3DBFF",
  },
  {
    id: 2,
    amount: 2376890,
    progress: 80,
    amountColor: "#FF5B58",
    describe: "均单值（元）",
    abilityIcon: "/wa3/m2.png",
    progressColor: "#FFA5A5",
    progressBackgroundColor: "#FFA5A5",
  },
  {
    id: 3,
    amount: 2376890,
    progress: 20,
    amountColor: "#4FA6B8",
    describe: "单位平米造价（元）",
    abilityIcon: "/wa3/average.png",
    progressColor: "#4FA6B8",
    progressBackgroundColor: "#88CEDC",
  },
  {
    id: 4,
    amount: 2376890,
    progress: 70,
    amountColor: "#8C6ED4",
    describe: "总持单量",
    abilityIcon: "/wa3/count.png",
    progressColor: "#B99EFA",
    progressBackgroundColor: "#B99EFA",
  },
];
</script>

<template>
  <div class="designer">
    <div class="person">
      <div class="person-left">
        <img src="/wa3/default.png" alt="" srcset="" />
        <div class="person-info">
          <span>小馒头</span>
          <p>安贞运营管理中心设计一部</p>
        </div>
      </div>
      <div class="person-right">
        <img src="/wa3/hot.png" alt="" srcset="" />
        <span>能力值</span>
      </div>
    </div>
    <ul class="ability">
      <Progress v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<style scoped lang="less">
.designer {
  padding: 15px 10px 15px;
  border-radius: 8px;
  background: linear-gradient(0deg, #292730, #292730), #ffffff;
  border: 1px solid #d7c4a1;

  display: flex;
  flex-direction: column;

  .person {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &-left {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }

    &-right {
      line-height: 21px;
      padding: 0 8px;
      border-radius: 4px;
      border: 1px solid #d7c4a1;

      img {
        width: 10.79px;
        height: 14.03px;
      }

      span {
        margin-left: 6px;
        font-family: Source Han Sans;
        font-size: 16px;
        font-weight: bold;
        color: #d7c4a1;
      }
    }

    &-info {
      margin-left: 7px;

      span {
        font-family: Source Han Sans;
        font-size: 18px;
        font-weight: bold;
        font-variation-settings: "opsz" auto;
        color: #ffffff;
      }

      p {
        margin-top: 7px;
        font-family: Source Han Sans;
        font-size: 12px;
        font-weight: normal;
        line-height: 21px;
        padding: 0 6px;
        border-radius: 4px;
        background: #d7c4a1;
      }
    }
  }

  .ability {
    margin-top: 15px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}
</style>
