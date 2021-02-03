const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rooms',
    createProxyMiddleware({
      target: 'https://chat.miauuapi.com',
      secure: false,
      changeOrigin: true,
    })
  );
};