<template>
  <article class="product-item">
    <template v-if="this.$slots['promotion']">
      <slot name="promotion" />
    </template>
    <figure
      v-if="this.$slots['image']"
      class="product-item__image">
      <slot name="image" />
    </figure>
    <aside class="product-item__info">
      <dl
        v-if="this.$slots['name']"
        class="product-item__list">
        <div
          v-if="this.$slots['name']"
          class="product-item__row">
          <dd class="product-item__key">
            <h2 class="product-item__name">
              <slot name="name" />
            </h2>
          </dd>
        </div>
        <div
          v-if="this.$slots['price']"
          class="product-item__row">
          <dt class="product-item__label">{{$t(`message.PRODUCT_PRICE_LABEL`)}}</dt>
          <dd class="product-item__key">
            <slot name="price" />
          </dd>
        </div>
      </dl>
      <footer
        v-if="this.$slots['action']"
        class="product-item__action">
        <slot name="action" />
      </footer>
    </aside>
  </article>
</template>
<script>
export default {
  name: 'ProductItem'
}
</script>
<style lang="scss" scoped src="./ProductItem.scss"></style>
