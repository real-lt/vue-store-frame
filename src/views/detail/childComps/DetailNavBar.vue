<template>
<div>
  <nav-bar class="home-nav">
    <div slot="left" class="back" @click="goBack">
      <img src="~assets/img/common/back.png">
    </div>
    <div slot="center" class="title">
      <div class="title-item" @click="itemClick(index)" :class="{active: index===currentIndex}" v-for="(item, index) in titles" :key="index">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index)
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.back img {
  width: 20px;
}

.title {
  display: flex;
  font-size: 14px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
