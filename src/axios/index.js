import axios from 'axios';
import qs from 'qs';

// axios 响应拦截器
axios.interceptors.response.use(res => {
  if (res.data.code === '200') {
    return res.data;
  } else {
    return Promise.reject(new Error(res.msg || '请求错误'));
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
