<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
  </nav-bar>
  <home-swiper :banners="banners" />
  <recommends-view :recommends="recommends" />
  <feature-view />
  <tab-control class="tab-control" :titles="['title1', 'title2', 'title3']" />
  <goods-list :goods="goods['title1'].list" />
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
</div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendsView from "./childComps/RecommendsView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendsView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "title1": { page: 0, list: [] },
        "title2": { page: 0, list: [] },
        "title3": { page: 0, list: [] },
      }
    }
  },
  created() {
    // 1. 请求多个数据
    this.loadHomeMultidata()
    // 2. 请求商品数据
    this.loadHomeGoods("title1")
    this.loadHomeGoods("title2")
    this.loadHomeGoods("title3")
  },
  methods: {
    loadHomeMultidata() {
      getHomeMultidata().then((result) => {
        this.banners = result.banners;
        this.recommends = result.recommends;
      }).catch((err) => {
        console.error(err)
      });
    },
    loadHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((result) => {
        console.log(result.list)
        this.goods[type].list.push(...result.list)
        this.goods[type].page += 1
      }).catch((err) => {
        console.error(err)
      });
    }
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  /* 吸顶 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
