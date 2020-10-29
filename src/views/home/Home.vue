<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
  </nav-bar>
  <tab-control ref="tabControl_1" class="tab-control" :titles="['title1', 'title2', 'title3']" @tabClick="tabClick" v-show="isTabFixed" />
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperImgComplete="swiperImgComplete" />
    <recommends-view :recommends="recommends" />
    <feature-view />
    <tab-control ref="tabControl_2" :titles="['title1', 'title2', 'title3']" @tabClick="tabClick" />
    <goods-list :goods="showGoodsByTab" />
  </scroll>
  <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  <!-- <main-loading :is-all="isAll" /> -->
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
// import MainLoading from "components/content/loading/MainLoading.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { imgLoadCompleteMinxin } from "common/mixin.js";
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
    BackTop,
    // MainLoading
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
      currentType: "title1",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
      // isAll: true
    }
  },
  mixins: [imgLoadCompleteMinxin],
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
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    // 取消全局事件监听
    this.$bus.$off("imageLoadComplete", this.imgLoadListener)
  },
  mounted() {},
  methods: {
    // 监听轮播图片加载完成事件（只监听一次即可，只是为了获取高度）
    swiperImgComplete() {
      // 所有的组件都有一个 $el 属性，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl_2.$el.offsetTop;
    },
    // 上拉加载更多
    loadMore() {
      this.loadHomeGoods(this.currentType);
    },
    // 监听页面滚动
    contentScroll(position) {
      // 1. 判断 BackTop 是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2. 决定tabControl是否吸顶（position:fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
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
      this.$refs.tabControl_1.currentIndex = this.$refs.tabControl_2.currentIndex = index;
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
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((result) => {
        // if ((result.list || []).length === 0) {
        // this.isAll = true;
        // } else {
        this.goods[type].list.push(...result.list)
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
        //   this.isAll = false;
        // }
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
  position: relative;
  z-index: 9;
}
</style>
