<template>
  <aside class="user-basket">
    <ul class="user-basket__content">
      <li class="user-basket__recap">
        <button
          aria-label="open basket"
          class="user-basket__items"
          @click="handleCart">
          <transition
            mode="out-in"
            name="update-items">
            <span :key="items.length">{{items.length}}</span>
          </transition>
        </button>
        <transition
          appear
          v-if="showCart"
          name="showCart">
          <transition-group
            tag="ul"
            class="user-basket__cart"
            name="showCart-row">
            <li
              key="close"
              class="user-basket__cart-close">
              <button
                aria-label="close"
                @click="handleCart"></button>
            </li>
            <template v-if="items.length > 0">
              <template v-for="(product, index) in items">
                <li
                  :key="product.id"
                  :data-index="index"
                  class="user-basket__cart__row">
                  <CartRow>
                    <template #image>
                      <img :src="product.image" :alt="product.name" />
                    </template>
                    <template #name>
                      {{product.name}}
                    </template>
                    <template #price>
                      {{$t(`message.PRODUCT_PRICE_VALUE`, { price: transformPrice(product.price) })}}
                    </template>
                    <template #action>
                      <BaseButton
                        :hasLabel="$t(`message.BASKET_LABEL_REMOVE`)"
                        isActive
                        :data-id="product.id"
                        @onClick="removeItem"/>
                    </template>
                  </CartRow>
                </li>
              </template>
              <template>
                <li
                  key="total"
                  :data-id="items.lenght"
                  class="user-basket__cart__row">
                  <CartRow>
                    <template #totalLabel>
                      Total
                    </template>
                    <template #totalCount>
                      {{$t(`message.PRODUCT_PRICE_VALUE`, { price: totalCount() })}}
                    </template>
                  </CartRow>
                </li>
              </template>
            </template>
            <template v-else>
              <li
                key="no-items"
                class="user-basket__cart__row user-basket__cart__row--void">
                <p class="user-basket__no-items">no items exist</p>
              </li>
            </template>
          </transition-group>
        </transition>

      </li>
      <li
        class="user-basket__label"
        v-if="this.$slots['label']"
        v-html="getContent('label')">
      </li>
    </ul>
  </aside>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserBasket',

  data () {
    return {
      showCart: false
    }
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    ...mapActions('products', [
      'setLockState'
    ]),

    handleCart () {
      this.showCart = !this.showCart
      if (this.getWindowWidth() <= 680) {
        this.showCart ? this.setLockState({ state: true }) : this.setLockState({ state: false })
      }
    },

    getContent (name) {
      return this.$slots[name][0]['text']
    },

    removeItem (event) {
      this.$emit('remove', event)
    },

    transformPrice (price) {
      return parseFloat(price).toFixed(2).replace('.', ',')
    },

    totalCount () {
      const prices = this.items.map((node) => node.price)
      return prices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2).replace('.', ',')
    },

    getWindowWidth () {
      return window.innerWidth
    }
  }
}
</script>
<style lang="scss" scoped src="./UserBasket.scss"></style>
