import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './app/App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
