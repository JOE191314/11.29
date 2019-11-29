module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://106.52.102.224:9084/app',
        changeOrigin : true
      }
    }
  },
  lintOnSave: false
}

