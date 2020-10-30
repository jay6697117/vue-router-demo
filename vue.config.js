module.exports = {
  // 默认'/'，部署应用包时的基本 URL
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  publicPath: './',

  devServer: {
    open: true,
    port: 8080
  }
};

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV); //打印环境变量
