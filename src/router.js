import Vue from 'vue';
import Router from 'vue-router';

import Login from 'components/login/login';
const Index = () => import('components/index/index');
const goodsList = () => import('components/goodsList/goodsList');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/goodsList',
          component: goodsList,
        }
      ]
    },
  ]
})
