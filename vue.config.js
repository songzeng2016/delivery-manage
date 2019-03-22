const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: 'static', // js css 相对于 dist 的路径
  chainWebpack(config) {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    // 查看打包体积
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
    // 配置别名
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('base', resolve('src/base'));
  },
  configureWebpack: {
    externals: { // 配置 CDN
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    },
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
