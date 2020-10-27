<template>
<div class="loading">
  <div class="left">
    <slot></slot>
  </div>
  <div class="center">
    <slot></slot>
  </div>
  <div class="right">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading {}
</style>
