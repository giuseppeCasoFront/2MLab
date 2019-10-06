<template>
  <section
    :class="[
      lockState ? 'lock' : null,
      'main']">
    <transition
      appear
      name="header">
      <keep-alive>
        <router-view
          class="main__header"
          name="header"></router-view>
      </keep-alive>
    </transition>
    <keep-alive>
      <router-view class="main__display"/>
    </keep-alive>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Main',

  computed: {
    ...mapState(['products']),

    lockState () {
      return this.products.lockState
    }
  }
}
</script>
<style lang="scss" scoped src="./Main.scss"></style>
