import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './axios';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.prototype.$get = axios.$get;
Vue.prototype.$post = axios.$post;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
