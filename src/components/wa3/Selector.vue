<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useVisible } from "@/hooks/useVisible";
const { visible, swichVisible, closeVisible } = useVisible();
const selected = ref(11);
const rows = [
  {
    id: 1,
    name: "测试数据的公司",
    number: "GS5255",
    code: "123456789123456789",
    nccCode: "12333",
    phone: "18763748782",
    email: "222213@qq.com",
    IDnumber: "12345678901234567890",
    contacts: "解耦if巨额偶见佛解耦if巨额偶见佛解的",
    address: "详细地址详细地址详细",
    province: 110000,
    city: 110100,
    region: 110105,
    fpPhone: "1",
    fpBankName: "2",
    fpBankNumber: "3",
    useMobile: false,
    openHighSeas: true,
    remarks:
      "1、不支持 egg-socketio 等网关不支持的协议\n2、不支持 文件上传 等网关无法支持的能力\n3、不支持 定时任务（可以使用组合 Timer 触发器的方式） \n3、还有一些，请参考 应用迁移 faq",
    status: true,
    createdAt: "2020-11-23T12:19:31.000Z",
    updatedAt: "2024-07-08T07:22:06.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "朝阳区",
    location: "北京北京市朝阳区详细地址详细地址详细",
  },
  {
    id: 2,
    name: "测试公司测测测",
    number: "GS9172",
    code: null,
    nccCode: null,
    phone: "23123",
    email: "124124",
    IDnumber: null,
    contacts: "124214",
    address: "12312",
    province: 110000,
    city: 110100,
    region: 110102,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: "4214",
    status: false,
    createdAt: "2020-11-29T03:33:54.000Z",
    updatedAt: "2023-02-11T10:20:47.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "西城区",
    location: "北京北京市西城区12312",
  },
  {
    id: 7,
    name: "缔梵空间-北京总部",
    number: "GS6692",
    code: "91110108MA01NNQads",
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "十里河企鹅文创园",
    province: 110000,
    city: 110100,
    region: 110105,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: false,
    createdAt: "2021-06-02T03:25:02.000Z",
    updatedAt: "2023-02-11T10:20:51.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "朝阳区",
    location: "北京北京市朝阳区十里河企鹅文创园",
  },
  {
    id: 8,
    name: "北京绿色家装饰工程有限公司",
    number: "GS4968",
    code: null,
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "通州1号",
    province: 110000,
    city: 110100,
    region: 110112,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: false,
    createdAt: "2021-07-03T06:53:12.000Z",
    updatedAt: "2023-02-11T10:20:55.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "通州区",
    location: "北京北京市通州区通州1号",
  },
  {
    id: 9,
    name: "好莱坞婚纱影楼",
    number: "GS8967",
    code: "12",
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "111111",
    province: 410000,
    city: 410800,
    region: 410825,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: false,
    createdAt: "2021-07-13T13:36:09.000Z",
    updatedAt: "2024-03-15T09:30:48.000Z",
    materialCount: 0,
    provinceName: "河南省",
    cityName: "焦作市",
    regionName: "温县",
    location: "河南省焦作市温县111111",
  },
  {
    id: 10,
    name: "优品装饰",
    number: "GS8066",
    code: null,
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "北京市朝阳区周家庄路8号汇金中心二层",
    province: 110000,
    city: 110100,
    region: 110105,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: false,
    createdAt: "2021-10-26T03:05:05.000Z",
    updatedAt: "2023-02-11T10:21:05.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "朝阳区",
    location: "北京北京市朝阳区北京市朝阳区周家庄路8号汇金中心二层",
  },
  {
    id: 11,
    name: "北京天坛装饰工程有限责任公司",
    number: "GS7321",
    code: "91110101723582884K",
    nccCode: "18001779",
    phone: null,
    email: null,
    IDnumber: null,
    contacts: "",
    address: "北京市东城区安定门外小黄庄路9号",
    province: 110000,
    city: 110100,
    region: 110101,
    fpPhone: "不知道",
    fpBankName: "不知道",
    fpBankNumber: "不知道",
    useMobile: true,
    openHighSeas: true,
    remarks: null,
    status: true,
    createdAt: "2022-12-15T07:30:20.000Z",
    updatedAt: "2024-07-08T10:17:17.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "东城区",
    location: "北京北京市东城区北京市东城区安定门外小黄庄路9号",
  },
  {
    id: 12,
    name: "北京天坛装饰工程有限责任公司杭州分公司",
    number: "GS3473",
    code: null,
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "杭州市拱墅区睿秦东业国际广场",
    province: 330000,
    city: 330100,
    region: 330105,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: true,
    createdAt: "2023-08-15T10:34:23.000Z",
    updatedAt: "2024-07-26T05:41:42.000Z",
    materialCount: 0,
    provinceName: "浙江省",
    cityName: "杭州市",
    regionName: "拱墅区",
    location: "浙江省杭州市拱墅区杭州市拱墅区睿秦东业国际广场",
  },
  {
    id: 13,
    name: "小杨不挨批公司",
    number: "GS4419",
    code: null,
    nccCode: null,
    phone: null,
    email: null,
    IDnumber: null,
    contacts: null,
    address: "阳光大道07号",
    province: 110000,
    city: 110100,
    region: 110105,
    fpPhone: null,
    fpBankName: null,
    fpBankNumber: null,
    useMobile: false,
    openHighSeas: false,
    remarks: null,
    status: true,
    createdAt: "2023-10-30T02:08:02.000Z",
    updatedAt: "2023-10-30T02:08:02.000Z",
    materialCount: 0,
    provinceName: "北京",
    cityName: "北京市",
    regionName: "朝阳区",
    location: "北京北京市朝阳区阳光大道07号",
  },
];
const selector = computed(() => {
  return rows.find((row) => row.id === selected.value);
});
onMounted(() => {
  document.addEventListener("click", closeVisible);
});
onUnmounted(() => {
  document.removeEventListener("click", closeVisible);
});
const open = (e: MouseEvent) => {
  e.stopPropagation();
  swichVisible();
};
const selectHandler = (id: number) => {
  selected.value = id;
};
</script>

<template>
  <div class="selector">
    <div class="selected" @click="open">
      <span>{{ selector?.name }}</span>
      <img
        :class="{ rotate: visible }"
        src="https://oss.tone.top/public/upload/file/13/0/2025-01-06-11-21-30-9ecca024-0eb1-4292-ac1d-19c6ef00060f.png"
        alt=""
        srcset=""
      />
    </div>
    <div class="wrapper" v-if="visible">
      <ul>
        <li v-for="row in rows" :key="row.id" @click="selectHandler(row.id)">
          <span :class="{ active: row.id === selected }">{{ row.name }}</span>
          <img
            v-if="row.id === selected"
            src="https://oss.tone.top/public/upload/file/13/0/2025-01-06-11-19-22-3b65260d-3f7d-4ba1-bb01-6aac8e505d3c.png"
            alt=""
            srcset=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.selector {
  width: 320px;
  height: 40px;
  background: linear-gradient(0deg, #29262d, #29262d), #224c66;
  box-sizing: border-box;
  border: 1px solid #d1be94;
  position: relative;

  .single-ellipsis {
    display: inline-block;
    max-width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 14px;
    transition: transform 0.3s ease-in-out;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .selected {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    cursor: pointer;

    span {
      font-family: 阿里巴巴普惠体;
      font-size: 16px;
      font-weight: 900;
      line-height: normal;
      letter-spacing: 0px;

      /* icon-背景 */
      color: #f5f6f7;
      .single-ellipsis();
    }
  }

  .wrapper {
    padding-top: 5px;
    top: 100%;
    width: 100%;
    position: absolute;

    ul {
      background: #1c3a49;

      li {
        cursor: pointer;
        line-height: 30px;
        padding: 0 15px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-family: AlibabaPuHuiTi;
          font-size: 14px;
          font-weight: normal;

          font-variation-settings: "opsz" auto;
          /* icon-背景 */
          color: #f5f6f7;
          .single-ellipsis();
        }

        img {
          height: 11px;
        }

        &:hover {
          background: #295063;
        }
      }
    }
  }
}
</style>
