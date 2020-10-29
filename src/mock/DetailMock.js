// 引入 mockjs
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// 根据id获取详情
const getDetailInfo = function (option) {
  let id = option.url.split("id=")[1];
  let topImages = [];
  const descs = ["新款上市", "清仓处理", "特价促销", "火爆热卖"]
  const columnsArr = ["默认快递", "AA快递", "BB快递", "CC快递"]
  for (let index = 0; index < 3; index++) {
    let imgs = Random.image('300x250', '#e6e3e3', 'mockImg');
    topImages.push(imgs)
  }
  let services = [];
  let names = ["退货补运费", "全国包邮", "7天无理由退货", "72小时发货"]
  for (let index = 0; index < 4; index++) {
    const serviceItem = {
      icon: Random.dataImage('300x300', 'mockImg'),
      name: names[index]
    }
    services.push(serviceItem)
  }
  let price = (Math.random() * 5).toFixed(2);
  let score_1 = (Math.random() * (5 - 3) + 3.5) > 5 ? 5 : (Math.random() * (5 - 3) + 3).toFixed(2);
  let score_2 = (Math.random() * (5 - 3) + 3.5) > 5 ? 5 : (Math.random() * (5 - 3) + 3).toFixed(2);
  let score_3 = (Math.random() * (5 - 3) + 3.5) > 5 ? 5 : (Math.random() * (5 - 3) + 3).toFixed(2);
  let detailInfoObj = {
    id,
    itemInfo: {
      topImages,
      title: Random.csentence(30),
      desc: descs[Math.floor((Math.random() * descs.length))],
      price,
      oldPrice: price * 2,
      lowNowPrice: (Math.random() * 5).toFixed(2)
    },
    columns: [`销量${Math.round(Math.random() * 100)}`, `收藏${Math.round(Math.random() * 100)}`, columnsArr[Math.floor((Math.random() * columnsArr.length))]],
    shopInfo: {
      services,
      shopLogo: Random.dataImage('200x200', 'logo'),
      name: Random.csentence(3, 5),
      cFans: Math.round(Math.random() * 100),
      cSells: (Math.random() * 5).toFixed(1),
      cGoods: Math.round(Math.random() * 100),
      score: [
        { isBetter: score_1 > 4.5, name: "描述相符", score: score_1 },
        { isBetter: score_2 > 4.5, name: "价格合理", score: score_2 },
        { isBetter: score_3 > 4.5, name: "质量满意", score: score_3 }
      ]
    },
    detailInfo: {
      desc: descs[Math.floor((Math.random() * descs.length))],
      detailImage: {
        desc: Random.csentence(30),
        key: "穿着效果",
        list: topImages
      }
    }
  }
  return {
    detailInfoObj
  }
}

// Mock.mock(url, post/get, 返回的数据)
Mock.mock(/\/detail\/info/, "get", getDetailInfo)