<template>
<div class="toast" v-show="isShow">
  {{message}}
</div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     typs: String,
  //     default: ""
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
  data() {
    return {
      message: "",
      isShow: false
    }
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 5px 10px;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  z-index: 999;
  font-size: 15px;
}
</style>
