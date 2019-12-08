const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      target: 'http://uno.hduzplus.xyz:4000/',
      changeOrigin: true,
      ws: true,
    }),
  );
};
