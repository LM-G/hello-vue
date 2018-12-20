import Vue from 'vue';
import Router from 'vue-router';
import Home from './app/features/home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/earth',
      name: 'earth',
      component: () => import(/* webpackChunkName: "earth" */ './app/features/earth/Earth.vue')
    },
    {
      path: '/mars',
      name: 'mars',
      component: () => import(/* webpackChunkName: "earth" */ './app/features/mars/Mars.vue')
    }
  ]
});
