const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'https://abhishek.nssiitd.in/ecommerce/', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );
};