<template>
<div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
  <div class="goods-desc">
    <div class="start"></div>
    <div class="desc-desc">{{detailInfo.detailImage.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="goods-imgs">
    <div>{{detailInfo.detailImage.key}}</div>
    <img @load="imgLoad" v-for="(item, index) in detailInfo.detailImage.list" :key="index" :src="item">
  </div>
</div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad")
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage.list.length
    }
  }
}
</script>

<style scoped>
.detail-goods-info {
  padding: 10px 10px;
  font-size: 14px;
}

.goods-desc {
  line-height: 16px;
  display: flex;
  flex-direction: column;
}

.start {
  width: 50px;
  border-bottom: 1px solid #adadad;
  margin-bottom: 10px;
}

.start:before {
  content: '';
  background-color: #323232;
  width: 5px;
  height: 5px;
  display: block;
  position: absolute;
}

.end {
  width: 50px;
  border-bottom: 1px solid #adadad;
  margin-top: 10px;
  align-self: flex-end;
}

.end:before {
  content: '';
  background-color: #323232;
  width: 5px;
  height: 5px;
  right: 10px;
  display: block;
  position: absolute;
}

.desc-desc {
  text-indent: 1em;
}

.goods-imgs {
  margin-top: 10px;
}

.goods-imgs div {
  margin-bottom: 8px;
}
</style>
