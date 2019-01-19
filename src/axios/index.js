import axios from 'axios';
import qs from 'qs';

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
