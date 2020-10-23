// 引入 mockjs
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// 首页上半部分模拟数据
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
Mock.mock("/home/multidata", "post", newHomeData)

// 首页tabControl对应的数据
const newHomeGoodsData = function (type, page) {
  let list = [];
  for (let index = 0; index < 20; index++) {
    let listObj = {
      id: index,
      collect: Math.floor(Math.random() * 10),
      link: Random.url(), // 生成URL
      price: (Math.random() * 5).toFixed(2),
      show: {
        img: Random.dataImage('300x500', 'mock图片')
      },
      desc: Random.csentence(),
    }
    list.push(listObj)
  }
  return { list: list }
}

Mock.mock("/home/goods", "post", newHomeGoodsData)