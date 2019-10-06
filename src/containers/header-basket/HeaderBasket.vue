<template>
  <header class="header-basket">
    <ul class="header-basket__content">
      <li>
        <h1 class="header-basket__title">{{$t(`message.PAGE_TITLE`)}}</h1>
      </li>
      <li>
        <UserBasket
          :items='orderList'
          @remove="removeItem">
          <template #label>
            {{$t(`message.BASKET_LABEL`)}}
          </template>
        </UserBasket>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState } from 'vuex'
import { Basket } from '../../helpers/basket'
import UserBasket from '@/containers/user-basket/UserBasket.vue'
export default {
  name: 'HeaderBasket',
  components: {
    UserBasket
  },
  computed: {
    ...mapState(['products']),

    orderList () {
      return this.products.order
    }
  },

  methods: {
    removeItem (e) {
      const id = e.dataset.id
      Basket.remove(id)
    }
  }
}
</script>
<style lang="scss" scoped src="./HeaderBasket.scss"></style>
