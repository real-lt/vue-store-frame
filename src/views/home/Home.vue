<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
  </nav-bar>
  <scroll class="content" ref="scroll">
    <home-swiper :banners="banners" />
    <recommends-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['title1', 'title2', 'title3']" @tabClick="tabClick" />
    <goods-list :goods="showGoodsByTab" />
  </scroll>
  <back-top @click.native="backTopClick" />
</div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendsView from "./childComps/RecommendsView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendsView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "title1": { page: 0, list: [] },
        "title2": { page: 0, list: [] },
        "title3": { page: 0, list: [] },
      },
      currentType: "title1"
    }
  },
  computed: {
    showGoodsByTab() {
      return this.goods[this.currentType].list
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
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    // tab 切换事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "title1";
          break;
        case 1:
          this.currentType = "title2";
          break;
        case 2:
          this.currentType = "title3";
          break;
      }
    },
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
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

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

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
