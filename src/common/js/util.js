/*
* localStorage 操作封装
* key {string} 键，只有 key 为获取
* value {string, object} 值，有值时为设置
* */
export function $local(key, value) {
  if (typeof value === 'undefined') {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  } else {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
}
