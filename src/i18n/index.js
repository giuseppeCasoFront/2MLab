import Vue from 'vue'
import VueI18n from 'vue-i18n'
import literalEN from './en'

const messages = {
  en: {
    message: literalEN
  }
}

Vue.use(VueI18n)
export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE,
  messages
})
