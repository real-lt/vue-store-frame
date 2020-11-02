import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad) {
      let oldProduct = null;
      for (let item of state.cartList) {
        if (item.iid === payLoad.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        oldProduct.count += 1;
      } else {
        payLoad.count = 1;
        state.cartList.push(payLoad)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
