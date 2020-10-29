<template>
<div id="detail">
  <detail-nav-bar ref="detailNav" class="detail-nav" @titleClick="navBarClick" />
  <scroll class="detail-content" ref="scroll" :probe-type="3" @scroll="detailScroll">
    <detail-swiper :topImgs="topImgs" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
    <detail-params-info ref="params" :paramsInfo="paramsInfo" />
    <detail-comment-info ref="comment" :commentInfo="commentInfo" />
    <goods-list ref="recommend" :goods="recommends" />
  </scroll>
  <detail-bottom-bar />
  <back-top @click.native="backTopClick" v-show="isShowBackTop" />
</div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetailById, Goods, ShopInfo, getRecommendsById } from "network/detail.js";
import { imgLoadCompleteMinxin, backTopMixin } from "common/mixin.js";
import { debounce } from "common/utils.js";

export default {
  name: "Detail",
  data() {
    return {
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  mixins: [imgLoadCompleteMinxin, backTopMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created() {
    getDetailById({
      id: 111
    }).then((result) => {
      const data = result.detailInfoObj;
      this.topImgs = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      this.shop = new ShopInfo(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramsInfo = data.paramsInfo;
      this.commentInfo = data.rate
    }).catch((err) => {
      console.error(err)
    });
    getRecommendsById({
      id: 111
    }).then(response => {
      this.recommends = response.list;
    }).catch(err => {
      console.error(err)
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 200)
  },
  mounted() {},
  methods: {
    // 页面滚动位置监听
    detailScroll(position) {
      let positionY = -position.y + 44;
      let length = this.themeTopYs.length;

      // for (let i = 0; i < length; i++) {
      // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
      //   this.currentIndex = i;
      //   this.$refs.detailNav.currentIndex = this.currentIndex;
      // }
      // hack 写法
      // 给 this.themeTopYs 最后 push 一个超级大的值，简化此处的判断逻辑
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = -position.y > 1000;
    },
    // 导航点击事件监听
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 300);
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY()
    }
  },
  destroyed() {
    // 取消全局事件监听
    this.$bus.$off("imageLoadComplete", this.imgLoadListener)
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
  overflow: hidden;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-content {
  height: calc(100% - 102px);
}
</style>
