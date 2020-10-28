// 引入 mockjs
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// 根据id获取详情
const getDetailInfo = function (option) {
  let id = option.url.split("id=")[1]
  let topImages = []
  for (let index = 0; index < 3; index++) {
    let imgs = Random.image('300x250', '#e6e3e3', 'mockImg');
    topImages.push(imgs)
  }
  let detailInfoObj = {
    id,
    itemInfo: {
      topImages
    }
  }
  // for (let i = 0; i < 5; i++) {
  //   let newBannerObject = {
  //     id: i,
  //     img: Random.image('300x250', '#e6e3e3', 'mockImg'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
  //     link: Random.url(), // 生成URL
  //   }
  //   banners.push(newBannerObject)
  // }
  return {
    detailInfoObj
  }
}

// Mock.mock(url, post/get, 返回的数据)
Mock.mock(/\/detail\/info/, "get", getDetailInfo)