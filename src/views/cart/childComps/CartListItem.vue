<template>
<div class="cart-list-item">
  <div class="item-selector">
    <check-button :isChecked="product.checked" @click.native="changeChecked" />
  </div>
  <div class="product-img">
    <img :src="product.image">
  </div>
  <div class="product-detail">
    <div class="product-title">{{product.title}}</div>
    <div class="product-desc">{{product.desc}}</div>
    <div class="product-total">
      <div class="product-price">￥{{product.price}}</div>
      <div class="product-count">X{{product.count}}</div>
    </div>
  </div>
</div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    changeChecked() {
      this.product.checked = !this.product.checked;
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 3px solid #e9e6e7;
}

.product-img img {
  width: 80px;
  margin: 0 5px;
}

.product-detail {
  font-size: 15px;
  width: 65%;
}

.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}

.product-desc {
  margin-bottom: 5px;
}

.product-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  color: #f07121;
  font-weight: bold;
}
</style>
