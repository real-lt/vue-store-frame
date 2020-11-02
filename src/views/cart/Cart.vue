<template>
<div class="cart">
  <nav-bar class="cart-nav">
    <div slot="center">购物车({{cartLength}})</div>
    <!-- <div slot="center">购物车({{length}})</div> -->
  </nav-bar>
  <cart-list />
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue"
import { mapGetters } from "vuex"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    // 数组语法
    ...mapGetters(["cartLength"])
    // 对象语法
    // ...mapGetters({
    //   length: "cartLength"
    // })
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}

.cart-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: bold;
}
</style>
