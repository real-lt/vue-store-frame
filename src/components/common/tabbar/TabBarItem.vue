<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActived">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-actived"></slot>
  </div>
  <div :style="activedStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activedColor: {
      type: String,
      default: "#d83d89" // 不传的话默认是粉色
    }
  },
  data() {
    return {
      // isActived: false
    }
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activedStyle() {
      return this.isActived ? { color: this.activedColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1; //宽度等分
  height: 49px;
  font-size: 14px;

  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
}
</style>
