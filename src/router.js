import Vue from 'vue';
import Router from 'vue-router';

import Login from 'components/login/login';
const Index = () => import('components/index/index');
const goodsList = () => import('components/index/goodsList/goodsList');
const sellerList = () => import('components/index/sellerList/sellerList');
const orderList = () => import('components/index/orderList/orderList');
const addGoods = () => import('components/index/addGoods/addGoods');
const addSeller = () => import('components/index/addSeller/addSeller');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/goodsList',
          component: goodsList,
        },
        {
          path: '/sellerList',
          component: sellerList,
        },
        {
          path: '/orderList',
          component: orderList,
        },
        {
          path: '/addGoods',
          component: addGoods,
        },
        {
          path: '/addSeller',
          component: addSeller,
        },
      ]
    },
  ]
})
