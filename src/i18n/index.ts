import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// extracts all yaml file names under lang child folder from current folder
const requireLang = require.context('./lang', true, /\.yml$/);

// creates objects from json language files
const messages = requireLang.keys().reduce((accumulator, file, i) => {
  const language = file.replace(/(\.\/|\.yml$)/g, '');
  return {
    ...accumulator,
    [language]: requireLang(file)
  };
}, {});

/**
 * Vue i18n instanciation
 */
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
