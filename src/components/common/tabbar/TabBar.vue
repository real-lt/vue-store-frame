<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  text-align: center;
  background-color: #f6f6f6;

  // 置于底部
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  // 阴影效果
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2);
}
</style>
