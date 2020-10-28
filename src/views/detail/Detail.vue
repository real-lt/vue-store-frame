<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" />
  <scroll class="content">
    <detail-swiper :topImgs="topImgs" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </scroll>
</div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";

import { getDetailById, Goods, ShopInfo } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      topImgs: [],
      goods: {},
      shop: {}
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  created() {
    getDetailById({
      id: 111
    }).then((result) => {
      const data = result.detailInfoObj;
      this.topImgs = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new ShopInfo(data.shopInfo)
    }).catch((err) => {
      console.error(err)
    });
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
  /* position: relative; */
  /* overflow: hidden; */
  /* top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
</style>
