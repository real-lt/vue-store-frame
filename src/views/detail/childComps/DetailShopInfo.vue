<template>
<div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
  <div class="shop-title">
    <img :src="shop.logo">
    {{shop.name}}
  </div>
  <div class="shop-info">
    <div class="shop-total">
      <span>
        <p>{{shop.sells + "万"}}</p>
        <p>总销量</p>
      </span>
      <span>
        <p>{{shop.goodsCount}}</p>
        <p>全部宝贝</p>
      </span>
    </div>
    <div class="shop-desc">
      <p v-for="(item, index) in shop.score" :key="index">
        <span>{{item.name}}</span>
        <span :class="{'scoreActive':item.isBetter}">{{item.score}}</span>
        <span :class="{'isBetter':item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
      </p>
    </div>
  </div>
  <button>进店逛逛</button>
</div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-shop-info {
  padding: 10px 10px;

  .shop-title {
    display: flex;
    align-items: center;

    img {
      width: 80px;
      border-radius: 40px;
      margin-right: 10px;
    }
  }

  .shop-info {
    display: flex;
    margin: 20px 0;
    justify-content: space-around;
    text-align: center;
    font-size: 15px;

    .shop-total {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      border-right: 2px solid #e6e3e3;

      span {
        p {
          &:first-child {
            padding-bottom: 4px;
          }
        }
      }
    }

    .shop-desc {
      flex: 1;

      p {
        padding: 0 12%;
        display: flex;
        justify-content: space-between;

        &:not(:last-child) {
          margin-bottom: 3px;
        }

        span {
          &:not(:last-child) {
            padding-right: 10px;
          }

          &:nth-child(2n) {
            color: #809d6a;
          }

          &:last-child {
            background-color: #809d6a;
            color: white;
          }

          &.scoreActive {
            color: #e0554e;
          }

          &.isBetter {
            background-color: #e0554e;
          }
        }
      }

    }
  }

  button {
    border: none;
    padding: 5px 5px;
    font-size: 14px;
    display: block;
    margin: 0 auto;
  }
}
</style>
