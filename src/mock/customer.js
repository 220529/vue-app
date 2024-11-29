import Mock from "mockjs";

// 生成随机数据
function generateData() {
  return Mock.mock({
    "data|5": [
      {
        序号: "@increment(1)",
        修改信息类型:
          '@pick(["客户电话", "客户姓名", "房屋状况", "户型空间", "客户地址"])',
        修改具体内容: function () {
          const type = this["修改信息类型"];
          if (type === "客户电话") {
            return `客户电话: 由【+13581691535】修改为【${Mock.mock(
              '@string("number", 11)"'
            )}】`;
          } else {
            return `【北京/北京市/石景山区/八场宿舍3号楼1单元201室】修改为【北京/北京市/石景山区/鲁谷路南市】`;
          }
        },
        订单状态: '@pick(["报价中", "已锁单", "已签单"])',
        修改原因: '@pick(["无", "去掉符号"])',
        操作人: "某某某",
        修改时间: '@datetime("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });
}

// 模拟分页数据
Mock.mock(/\/api\/data/, "get", (options) => {
  const page = options.url.split("page=")[1];
  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = generateData().data;
  const total = data.length;
  const pagedData = data.slice(startIndex, endIndex);
  return {
    data: pagedData,
    total: total,
  };
});
