<template>
  <table class="cart-row">
    <tr>
      <td
        v-if="this.$slots['image']"
        class="cart-row__image">
        <figure><slot name="image" /></figure>
      </td>
      <td
        v-if="this.$slots['name']"
        class="cart-row__name">
        <slot name="name" />
      </td>
      <td
        v-if="this.$slots['price']"
        class="cart-row__price">
        <slot name="price" />
      </td>
      <td
        v-if="this.$slots['action']"
        class="cart-row__action">
        <slot name="action" />
      </td>
      <td
        v-if="this.$slots['totalLabel']"
        class="cart-row__total-label">
         <slot name="totalLabel" />
      </td>
      <td
        v-if="this.$slots['totalCount']"
        class="cart-row__total-count">
        <slot name="totalCount" />
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'CartRow'
}
</script>
<style lang="scss" scoped src="./CartRow.scss"></style>
