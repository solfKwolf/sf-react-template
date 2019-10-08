/**
 * @description 反向代理设置
 * 基本满足开发需求，只在开发模式下
 */

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://192.168.101.190:8080',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
    },
  }));
};