<template>
<div id="detail">
  <detail-nav-bar />
  <detail-swiper :topImgs="topImgs" />
  <detail-base-info :goods="goods" />
  <detail-shop-info :shop="shop" />
</div>
</template>

<script>
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
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
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

<style lang="scss" scoped>

</style>
