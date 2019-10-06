<template>
  <h3
    :class="[
      `base-ribbon--${hasPosition}`,
      'base-ribbon'
    ]">
    <span class="base-ribbon__label">{{hasText}}</span>
  </h3>
</template>
<script>
export default {
  name: 'BaseRibbon',

  props: {
    hasText: { type: String },
    hasPosition: {
      type: String,
      default: 'tl'
    },
    hasColor: {
      type: String,
      default: '000'
    }
  },

  methods: {
    setCustomVariable () {
      this.$nextTick(() => {
        let componentStyles = this.$el.style
        componentStyles.setProperty('--ribbon-color', `#${this.hasColor}`)
      })
    }
  },

  mounted () {
    this.setCustomVariable()
  }
}
</script>
<style scoped lang="scss" src="./BaseRibbon.scss"></style>
