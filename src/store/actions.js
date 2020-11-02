import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types.js"
export default {
  addCart(context, payLoad) {
    let oldProduct = context.state.cartList.find(t => t.iid === payLoad.iid);
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      payLoad.count = 1;
      payLoad.checked = true;
      // state.cartList.push(payLoad)
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}