<template>
<div class="featureView">
  <div class="title">自定义标题</div>
  <div class="feature-item-line" v-for="i in 2" :key="i">
    <div class="feature-item" v-for="item in 3" :key="item">
      <img src="~assets/img/home/example.jpg">
      <div>自定义标题</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FeatureView"
}
</script>

<style scoped>
.featureView {
  display: flex;
  width: 100%;
  padding: 15px 0 10px;
  flex-direction: column;
}

.title {
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
}

.feature-item-line {
  width: 100%;
  display: flex;
  text-align: center;
  margin: 5px 0;
}

.feature-item {
  flex: 1;
  font-size: 12px;
}

.feature-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>
