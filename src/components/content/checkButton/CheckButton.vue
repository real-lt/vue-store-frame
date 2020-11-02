<template>
<div class="check-button">
  <img src="~assets/img/common/check.png" :class="{checked:isChecked}">
</div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button img {
  width: 15px;
  border-radius: 10px;
  border: 2px solid #ff8198;
}

.checked {
  background-color: #ff8198;
}

.check-button {
  width: 15px;
  height: 15px;
}
</style>
