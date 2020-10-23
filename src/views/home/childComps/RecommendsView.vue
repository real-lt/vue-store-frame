<template>
<div class="recommends">
  <div v-for="item in recommends" :key="item.id" class="recommends-item">
    <a :href="item.link">
      <img :src="item.img">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendsView",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends {
  display: flex;
  width: 100%;
  padding: 5px 0 20px;
  font-size: 12px;
  text-align: center;
  border-bottom: 5px solid #e6e3e3;
}

.recommends-item {
  flex: 1;
}

.recommends-item img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 5px;
}
</style>
