import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import axios from './axios';

import 'common/stylus/index.styl';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$get = axios.$get;
Vue.prototype.$post = axios.$post;

Vue.prototype.$message = (message = '操作成功', type = 'success', showClose = true) => {
  ElementUI.Message({
    showClose,
    message,
    type,
  });
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
