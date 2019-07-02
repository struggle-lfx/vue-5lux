module.exports = {
    devServer: {
      proxy: {
        '/index': {
          target: 'https://apim.restful.5lux.com.cn',
          changeOrigin: true
          
        }
      }
    }
  }