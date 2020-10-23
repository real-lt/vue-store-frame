// 引入 mockjs
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock 一组数据
const newHomeData = function () {
  let banners = [];
  for (let i = 0; i < 5; i++) {
    let newBannerObject = {
      id: i,
      img: Random.dataImage('300x250', 'mock图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      link: Random.url(), // 生成URL
    }
    banners.push(newBannerObject)
  }
  let recommends = [];
  for (let i = 0; i < 4; i++) {
    let newRecommendObject = {
      id: i,
      img: Random.dataImage('300x250', 'mock图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      link: Random.url(), // 生成URL
      title: "自定义标题"
    }
    recommends.push(newRecommendObject)
  }

  return {
    banners: banners, // 首页轮播
    recommends: recommends
  }
}

// Mock.mock(url, post/get, 返回的数据)
Mock.mock("/news/index", "post", newHomeData)