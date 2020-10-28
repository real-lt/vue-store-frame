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
    },
    // pullUpLoad: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 1. 创建 better-scroll 对象
      this.scroll = new BScroll(this.$refs.wrapper, {

        click: true, // 控制其内的元素是否可以被点击，默认 false
        probeType: this.probeType,
        // pullUpLoad: this.pullUpLoad // 是否开启上拉刷新监听
      })
      // 2. 监听滚动的位置
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position)
      })

      // 3. 监听上拉加载更多
      // this.scroll.on("scrollEnd", () => {
      //   if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
      //     this.$emit("scrollEnd")
      //   }
      // })
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.$nextTick(() => {
        this.scroll.refresh();
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
