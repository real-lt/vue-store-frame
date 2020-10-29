<template>
<div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
  <table rules=rows class="tables-table" border frame=below>
    <tr v-for="(item, index) in paramsInfo.tables" :key="index">
      <td v-for="(it,id) in item" :key="id">{{it}}</td>
    </tr>
  </table>
  <table class="info-table" rules=rows border frame=below>
    <tr v-for="(iItem, iIndex) in paramsInfo.info.set" :key="iIndex">
      <td>{{iItem.key}}</td>
      <td class="second">{{iItem.value}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-params-info {
  padding: 10px 10px;
  font-size: 14px;
}

.tables-table {
  width: 100%;
}

table {
  line-height: 30px;
  border-color: rgb(218, 216, 216);
  border-bottom-width: medium;
}

.info-table {
  width: 100%;
}

.info-table .second {
  color: var(--color-high-text);
}
</style>
