import store from '../store/'

export class Basket {
  static add (id) {
    const basket = [...store.state.products.order, store.state.products.response.filter((node) => node.id === id)[0]]
    store.dispatch('products/fillOrder', { order: basket })
  }

  static remove (id) {
    const basket = store.state.products.order.filter((node) => node.id !== id)
    store.dispatch('products/fillOrder', { order: basket })
  }
}
