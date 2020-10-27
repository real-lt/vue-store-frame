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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    // 1. 创建 better-scroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 控制其内的元素是否可以被点击，默认 false
      click: true,
      probeType: this.probeType
    })
    // 2. 监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position)
    })
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
