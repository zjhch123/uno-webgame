const path = require('path');
const jsonServer = require('json-server'); // eslint-disable-line
const fs = require('fs-extra');

const dbPath = path.resolve(__dirname, '../src/mock/db.json');
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

const watchDBMiddleware = (req, res, next) => fs
  .readJson(dbPath)
  .then((contents) => {
    router.db.assign(contents).write();
    next();
  });

server.use([
  ...middlewares,
  watchDBMiddleware,
]);

server.use('/api', router);

server.listen(4000, () => {
  console.log('JSON Server is running');
});
