<template>
<div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
  <div class="comment-title">
    <span>用户评价</span>
    <span>更多</span>
  </div>
  <template v-if="commentInfo.cRate != 0">
    <div class="comment-info">
      <div class="user-info">
        <img :src="commentInfo.comment.photo">
        {{commentInfo.comment.name}}
      </div>
      <div class="comment-detail">
        <div>{{commentInfo.comment.content}}</div>
        <div>{{commentInfo.comment.date|format}}{{" 尺码："+commentInfo.comment.size}}</div>
        <img v-for="(item, index) in commentInfo.comment.imgs" :key="index" :src="item">
      </div>
    </div>
  </template>
  <template v-else>
    <div class="noData">--- 暂无评价 ---</div>
  </template>
</div>
</template>

<script>
import { formatDate } from "common/utils.js"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    format(value) {
      let date = new Date(value)
      return formatDate(date, "yyyy-MM-dd")
    }
  }
}
</script>

<style scoped>
.detail-comment-info {
  padding: 10px 10px;
  font-size: 14px;
}

.comment-title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #e6e3e3;
  margin-bottom: 15px;
}

.comment-info {
  font-size: 12px;
  padding-bottom: 8px;
  border-bottom: 3px solid #e6e3e3;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-info img {
  width: 50px;
  border-radius: 30px;
  margin-right: 5px;
}

.comment-detail {
  line-height: 15px;
}

.comment-detail div {
  margin-bottom: 10px;
}

.comment-detail img {
  width: 90px;
  margin-right: 8px;
}

.noData {
  border-bottom: 3px solid #e6e3e3;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
}
</style>
