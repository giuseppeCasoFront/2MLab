<template>
  <button
    :class="[
      'base-button',
      inProcess ? 'base-button--inProcess': null,
      isActive ? 'base-button--isActive': null]"
    :disabled="isDisabled"
    @click="onClick">
    <transition
      appear
      v-on:before-enter="getLabelWidth(arguments)"
      mode="out-in"
      name="change-label">
      <span :key="hasLabel">{{hasLabel}}</span>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    hasLabel: {
      type: String,
      required: true
    },

    isDisabled: {
      type: Boolean,
      default: false
    },

    inProcess: {
      type: Boolean,
      default: false
    },

    isActive: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick (event) {
      this.$emit('onClick', event.target)
    },

    getLabelWidth (args) {
      if (args[0]) {
        this.$nextTick(() => {
          let componentStyles = this.$el.style
          componentStyles.setProperty('--button-width', `${args[0].offsetWidth}px`)
        })
      }
    }
  }
}
</script>
<style scoped lang="scss" src="./BaseButton.scss"></style>
