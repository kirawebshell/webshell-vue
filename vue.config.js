module.exports = {
  devServer: {
    port: 8081, // 设置开发服务器的端口
    open: true,  // 启动时自动打开浏览器
    proxy: {
      // 代理设置（如果需要的话，可以设置代理）
      '/api': {
        target: 'http://127.0.0.1:12312',  // 目标后端服务地址
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '',  // 如果后端接口不需要前缀，去掉 /api
        },
      },
    },
  },
};