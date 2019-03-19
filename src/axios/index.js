import axios from 'axios';
import qs from 'qs';
import router from '../router';
import {Message} from 'element-ui';

// axios 响应拦截器
axios.interceptors.response.use(res => {
  const {code} = res.data;
  if (code === '200') {
    return res.data;
  } else if (code === '501') {
    router.replace('/login');
    return Promise.reject(new Error(res.data.msg || '请求错误'));
  } else {
    Message({
      showClose: true,
      message: res.data.msg || '请求错误',
      type: 'error'
    });
    return Promise.reject(new Error(res.data.msg || '请求错误'));
  }
});

export default {
  $get: (url, data = {}) => {
    return axios.get(url, {params: data});
  },
  $post: (url, data = {}, type) => {
    if (!type) {
      return axios({
        method: 'post',
        url,
        data: qs.stringify(data),
      });
    } else if (type === 'FormData') {
      return axios({
        method: 'post',
        url,
        data,
      });
    }
  },
};
