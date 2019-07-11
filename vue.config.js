module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://apim.restful.5lux.com.cn',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }         
        },
        '/search': {
          target: 'http://t1.restful.5lux.com.cn',
          changeOrigin: true,
          pathRewrite: {
            '^/search': ''
          }         
        }
      },
      disableHostCheck: true,
    },

  }