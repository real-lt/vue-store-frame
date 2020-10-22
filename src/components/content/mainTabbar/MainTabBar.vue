<template>
<tab-bar>
  <tab-bar-item path="/home">
    <img slot="item-icon" src="~assets/img/tabbar/shouye.png">
    <img slot="item-icon-actived" src="~assets/img/tabbar/shouye-actived.png">
    <div slot="item-text">首页</div>
  </tab-bar-item>
  <tab-bar-item path="/category">
    <img slot="item-icon" src="~assets/img/tabbar/fenlei.png">
    <img slot="item-icon-actived" src="~assets/img/tabbar/fenlei-actived.png">
    <div slot="item-text">分类</div>
  </tab-bar-item>
  <tab-bar-item path="/cart">
    <img slot="item-icon" src="~assets/img/tabbar/gouwuche.png">
    <img slot="item-icon-actived" src="~assets/img/tabbar/gouwuche-actived.png">
    <div slot="item-text">购物车</div>
  </tab-bar-item>
  <tab-bar-item path="/profile">
    <img slot="item-icon" src="~assets/img/tabbar/wode.png">
    <img slot="item-icon-actived" src="~assets/img/tabbar/wode-actived.png">
    <div slot="item-text">我的</div>
  </tab-bar-item>
</tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
}
</script>

<style lang="scss" scoped>

</style>
