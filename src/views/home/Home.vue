<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
  </nav-bar>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.img">
      </a>
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import { Swiper, SwiperItem } from "components/common/swiper"
import { getHomeMultidata } from "network/home.js"
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
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
      // this.recommends = result.recommends;
    }).catch((err) => {

    });
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
