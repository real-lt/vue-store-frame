import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"

Vue.use(Vuex)

const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  // mutations 唯一的目的就是修改 state 中的状态
  // mutations 中的每个方法尽可能完成的事件比较单一一点
  mutations,
  actions ,
  getters,
  modules: {
  }
})

export default store
