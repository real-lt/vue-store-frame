<template>
<div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
  <div class="detail-title">{{goods.title}}</div>
  <div class="detail-prices">
    <div class="detail-n-price">￥{{goods.newPrice}}</div>
    <div class="detail-o-price">￥{{goods.oldPrice}}</div>
    <div class="detail-desc">{{goods.desc}}</div>
  </div>
  <div class="detail-others">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[0].name}}</span>
  </div>
  <div class="store-promise">
    <span><img :src="goods.services[2].icon">{{goods.services[2].name}}</span>
    <span><img :src="goods.services[3].icon">{{goods.services[3].name}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info {
  padding: 10px 10px;
}

.detail-title {
  font-weight: bold;
  line-height: 20px;
}

.detail-prices {
  display: flex;
  align-items: center;
  padding: 15px 0 20px;
}

.detail-prices .detail-n-price {
  color: var(--color-high-text);
  font-weight: bold;
  font-size: 20px;
}

.detail-prices .detail-o-price {
  font-size: 14px;
  color: #adadad;
  text-decoration: line-through;
  padding-left: 5px;
}

.detail-prices .detail-desc {
  background-color: var(--color-high-text);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 5px;
  border-radius: 15px;
  margin-left: 8px;
}

.detail-others {
  display: flex;
  font-size: 12px;
  color: #adadad;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 3px solid #e6e3e3;
}

.store-promise {
  padding: 10px 0;
  font-size: 14px;
  color: #adadad;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #e6e3e3;
}

.store-promise span {
  display: flex;
  align-items: center;
}

.store-promise img {
  width: 13px;
  border-radius: 15px;
  margin-right: 2px;
}
</style>
