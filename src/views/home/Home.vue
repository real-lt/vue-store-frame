<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
  </nav-bar>
  <home-swiper :banners="banners" />
  <recommends-view :recommends="recommends" />
  <feature-view />
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendsView from "./childComps/RecommendsView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import { getHomeMultidata } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((result) => {
      console.log(result)
      this.banners = result.banners;
      this.recommends = result.recommends;
    }).catch((err) => {

    });
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
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
</style>
