import Vue from 'vue';
import Router from 'vue-router';

// 首页不需要分开打包，直接放入主包，减少请求
import Login from 'components/login/login';
// const Login = () => import('components/login/login');
// const Index = () => import('components/index/index');
// const goodsList = () => import('components/index/goodsList/goodsList');
// 首页跳转过来的页面用到的组件一起打包，减少请求
const Index = () => import(/* webpackChunkName: 'index' */ 'components/index/index');
const goodsList = () => import(/* webpackChunkName: 'index' */ 'components/index/goodsList/goodsList');
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
});
