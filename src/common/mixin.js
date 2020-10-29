import { debounce } from "common/utils.js";

export const imgLoadCompleteMinxin = {
  data() {
    return {
      imgLoadListener: null
    }
  },
  mounted() {
    // 1. 监听图片加载，刷新BScroll
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 2. 对监听的事件进行保存
    this.imgLoadListener = () => {
      refresh()
    }
    this.$bus.$on("imageLoadComplete", this.imgLoadListener)
  }
}