<template>
<div id="detail">
  <detail-nav-bar />
  <detail-swiper :topImgs="topImgs" />
</div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import { getDetailById } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      topImgs: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    getDetailById({
      id: 111
    }).then((result) => {
      this.topImgs = result.detailInfoObj.itemInfo.topImages
    }).catch((err) => {

    });
  }
}
</script>

<style lang="scss" scoped>

</style>
