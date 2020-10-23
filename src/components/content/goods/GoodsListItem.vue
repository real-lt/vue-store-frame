<template>
<div class="goods-list-item">
  <img :src="goodsItem.show.img">
  <div class="goods-info">
    <p>{{goodsItem.desc}}</p>
    <span class="price">￥{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.collect}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 4px 0;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/home/zan.png") 0 0/14px 14px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
</style>
