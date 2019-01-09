/**
 * Vue router configuration
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@app/views/home/Home.vue')
    },
    {
      path: '/earth',
      name: 'earth',
      component: () => import('@app/views/earth/Earth.vue')
    },
    {
      path: '/mars',
      name: 'mars',
      component: () => import('@app/views/mars/Mars.vue')
    },
    { path: '*', redirect: '/home' }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
