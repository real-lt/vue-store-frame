<template>
<div class="wrapper" ref="wrapper">
  <div class="scroll-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 控制其内的元素是否可以被点击，默认 false
      click: true
    })
    console.log(this.scroll)
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>
