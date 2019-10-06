<template>
  <transition-group
    v-on:before-enter="setCustomVariables(arguments)"
    tag="ul"
    class="products-grid"
    name="showResponse">
    <template v-if="productsList && productsList.length > 0">
      <template v-for="(product, index) in productsList">
        <li
          :key="product.id"
          :data-index="index"
          class="products-grid__cell">
          <ProductItem>
            <template
              v-if="product.promo_buy_one_get_one_free"
              #promotion>
              <BaseRibbon
                hasText="promotion"
                hasPosition="tr"
                hasColor="79480B"/>
            </template>
            <template #image>
              <img :src="product.image" :alt="product.name" />
            </template>
            <template #name> {{product.name}} </template>
            <template #price> {{$t(`message.PRODUCT_PRICE_VALUE`, { price: transformPrice(product.price) })}} </template>
            <template #action>
              <BaseButton
                :hasLabel="checkOrderBasket(product.id) ? $t(`message.PRODUCT_REMOVE`) : $t(`message.PRODUCT_ADD`)"
                :isActive="checkOrderBasket(product.id)"
                :data-id="product.id"
                @onClick="handleBasket"/>
            </template>
          </ProductItem>
        </li>
      </template>
    </template>
    <template v-else>
      <li
        key="loading"
        class="products-grid__cell products-grid--isLoading">{{$t(`message.LOADING`)}}</li>
    </template>
  </transition-group>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { Basket } from '../../helpers/basket'
export default {
  name: 'ProductsGrid',

  data () {
    return {
      delay: 0.2
    }
  },

  computed: {
    ...mapState(['products']),

    productsList () {
      return this.products.response
    },

    orderList () {
      return this.products.order
    }
  },

  methods: {
    ...mapActions('products', [
      'getProducts',
      'fillResponse'
    ]),

    async getResponse () {
      const products = await this.getProducts()
      this.fillResponse({ response: products })
    },

    transformPrice (price) {
      return parseFloat(price).toFixed(2).replace('.', ',')
    },

    handleBasket (e) {
      const id = e.dataset.id
      if (!this.checkOrderBasket(id)) {
        Basket.add(id)
      } else {
        Basket.remove(id)
      }
    },

    checkOrderBasket (id) {
      return this.orderList.filter((node) => node.id === id).length > 0
    },

    setCustomVariables (args) {
      let childrenStyle = args[0].style

      if (args[0]) {
        this.$nextTick(() => {
          childrenStyle.setProperty('--animation-delay', `${this.delay * parseInt(args[0].dataset.index) + 1}s`)
        })
      }
    }
  },

  mounted () {
    this.getResponse()
  }
}
</script>
<style lang="scss" scoped src="./ProductsGrid.scss"></style>
