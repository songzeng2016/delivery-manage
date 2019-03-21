const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('base', resolve('src/base'))
  },
  // 修改的配置
  devServer: {
    // proxy: 'https://xiaoce-timeline-api-ms.juejin.im',  // 统一配置
    proxy: 'http://127.0.0.1:3000', // 统一配置
    // proxy: 'http://songzeng1994.cn/api', // 统一配置
    // proxy: {
    //   // '^/books': {
    //   //   target: 'https://xiaoce-timeline-api-ms.juejin.im',
    //   //   changeOrigin: true,
    //   //   ws: true,
    //   //   pathRewrite: {
    //   //     '^/books': ''
    //   //   }
    //   // },
    //   '^/goods': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/goods': ''
    //     }
    //   }
    // },
  }
};
