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

import { getDetailById, Goods, ShopInfo } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {}
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo
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
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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
