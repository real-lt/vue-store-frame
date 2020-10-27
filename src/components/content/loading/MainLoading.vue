<template>
<div class="main-loading">
  <loading>
    <div slot="left">-----</div>
    <div slot="center" v-if="isAll">我是有底线的</div>
    <div slot="center" v-else>上拉加载更多</div>
    <div slot="right">-----</div>
  </loading>
</div>
</template>

<script>
import Loading from "components/common/loading/Loading.vue"
export default {
  name: "MainLoading",
  components: {
    Loading
  },
  props: {
    isAll: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
