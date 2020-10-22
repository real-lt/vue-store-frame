module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      // webpack 默认已经配置好了 @ 代表 src
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    }
  }
}