<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" />
  <scroll class="detail-content" ref="scroll">
    <detail-swiper :topImgs="topImgs" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
    <detail-params-info :paramsInfo="paramsInfo" />
    <detail-comment-info :commentInfo="commentInfo" />
    <goods-list :goods="recommends" />
  </scroll>
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

import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetailById, Goods, ShopInfo, getRecommendsById } from "network/detail.js";
import { imgLoadCompleteMinxin } from "common/mixin.js";

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
      recommends: []
    }
  },
  mixins: [imgLoadCompleteMinxin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList
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
    })
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
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
  height: calc(100% - 44px);
}
</style>
