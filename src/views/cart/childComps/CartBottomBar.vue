<template>
<div class="cart-bottom-bar">
  <div class="choose-all">
    <check-button :isChecked="isSelectAll" />
    <span>全选</span>
    合计：{{totalPrice}}
  </div>
  <div class="calculate">去结算({{productLength}})</div>
</div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"
import { mapGetters } from "vuex"
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      let total = this.cartList.filter(item => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
      return "￥" + total.toFixed(2);
    },
    productLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  background-color: #eeeeee;
  position: relative;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.choose-all {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 15px;
}

.choose-all span {
  margin: 0 5px;
}

.calculate {
  font-size: 14px;
  padding: 0 5px;
  background-color: rgb(235, 140, 140);
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}
</style>
